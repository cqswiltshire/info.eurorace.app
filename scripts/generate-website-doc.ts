import fs from 'fs';
import path from 'path';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  UnderlineType,
  ExternalHyperlink,
  AlignmentType,
  BorderStyle,
} from 'docx';

interface TextPiece {
  text: string;
  bold?: boolean;
  italic?: boolean;
  isLink?: boolean;
  href?: string;
  isCode?: boolean;
}

type HeadingLevelValue = (typeof HeadingLevel)[keyof typeof HeadingLevel];

interface BlockElement {
  type: 'heading' | 'paragraph' | 'bullet' | 'code_block';
  level?: HeadingLevelValue;
  pieces: TextPiece[];
}

/**
 * Scan directory recursively to discover all Next.js page files.
 */
function getPageFiles(dirPath: string): string[] {
  const files: string[] = [];

  function scan(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (
        entry.isFile() &&
        /^page\.(tsx|jsx|ts|js)$/.test(entry.name)
      ) {
        files.push(fullPath);
      }
    }
  }

  scan(dirPath);

  // Ensure src/app/page.tsx is first, followed by all remaining pages alphabetically by relative path
  files.sort((a, b) => {
    const relA = path.relative(dirPath, a);
    const relB = path.relative(dirPath, b);

    const isHomeA = /^page\.(tsx|jsx|ts|js)$/.test(relA);
    const isHomeB = /^page\.(tsx|jsx|ts|js)$/.test(relB);

    if (isHomeA && !isHomeB) return -1;
    if (!isHomeA && isHomeB) return 1;

    return relA.localeCompare(relB);
  });

  return files;
}

/**
 * Basic markdown parser for inline text pieces.
 */
function parseInlineMarkdown(text: string): TextPiece[] {
  const pieces: TextPiece[] = [];
  const regex = /(\*\*(.*?)\*\*|\*(.*?)\*|\[(.*?)\]\((.*?)\)|`(.*?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      pieces.push({ text: text.slice(lastIndex, match.index) });
    }

    if (match[2] !== undefined) {
      pieces.push({ text: match[2], bold: true });
    } else if (match[3] !== undefined) {
      pieces.push({ text: match[3], italic: true });
    } else if (match[4] !== undefined) {
      pieces.push({ text: match[4], isLink: true, href: match[5] });
    } else if (match[6] !== undefined) {
      pieces.push({ text: match[6], isCode: true });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    pieces.push({ text: text.slice(lastIndex) });
  }

  return pieces.length > 0 ? pieces : [{ text }];
}

/**
 * Parse markdown content into structured block elements.
 */
function parseMarkdownToBlocks(content: string): BlockElement[] {
  const blocks: BlockElement[] = [];
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('# ')) {
      blocks.push({
        type: 'heading',
        level: HeadingLevel.HEADING_2,
        pieces: parseInlineMarkdown(trimmed.replace(/^#\s+/, '')),
      });
    } else if (trimmed.startsWith('## ')) {
      blocks.push({
        type: 'heading',
        level: HeadingLevel.HEADING_3,
        pieces: parseInlineMarkdown(trimmed.replace(/^##\s+/, '')),
      });
    } else if (trimmed.startsWith('### ')) {
      blocks.push({
        type: 'heading',
        level: HeadingLevel.HEADING_4,
        pieces: parseInlineMarkdown(trimmed.replace(/^###\s+/, '')),
      });
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      blocks.push({
        type: 'bullet',
        pieces: parseInlineMarkdown(trimmed.replace(/^[-*]\s+/, '')),
      });
    } else if (/^\d+\.\s+/.test(trimmed)) {
      blocks.push({
        type: 'bullet',
        pieces: parseInlineMarkdown(trimmed.replace(/^\d+\.\s+/, '')),
      });
    } else {
      blocks.push({
        type: 'paragraph',
        pieces: parseInlineMarkdown(trimmed),
      });
    }
  }

  return blocks;
}

/**
 * Extract block elements and inline styling from JSX AST.
 */
function extractJsxText(filePath: string): BlockElement[] {
  const code = fs.readFileSync(filePath, 'utf-8');

  let ast: any;
  try {
    ast = babelParser.parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx'],
    });
  } catch (err) {
    console.error(`Error parsing AST for ${filePath}:`, err);
    return [];
  }

  const blocks: BlockElement[] = [];
  const stringVars = new Map<string, string>();

  let metaTitle = '';
  let metaDesc = '';

  // First pass: extract variable declarations and page metadata
  traverse(ast, {
    VariableDeclarator(nodePath: any) {
      const id = nodePath.node.id;
      const init = nodePath.node.init;
      if (id && id.type === 'Identifier' && init) {
        if (init.type === 'StringLiteral') {
          stringVars.set(id.name, init.value);
        }
      }
    },
    ExportNamedDeclaration(nodePath: any) {
      const declaration = nodePath.node.declaration;
      if (
        declaration &&
        declaration.type === 'VariableDeclaration' &&
        declaration.declarations
      ) {
        for (const decl of declaration.declarations) {
          if (decl.id && decl.id.name === 'metadata' && decl.init && decl.init.type === 'ObjectExpression') {
            for (const prop of decl.init.properties) {
              if (prop.key && prop.value && prop.value.type === 'StringLiteral') {
                if (prop.key.name === 'title' || prop.key.value === 'title') {
                  metaTitle = prop.value.value;
                }
                if (prop.key.name === 'description' || prop.key.value === 'description') {
                  metaDesc = prop.value.value;
                }
              }
            }
          }
        }
      }
    },
  });

  if (metaTitle || metaDesc) {
    if (metaTitle) {
      blocks.push({
        type: 'heading',
        level: HeadingLevel.HEADING_3,
        pieces: [{ text: `Meta Title: ${metaTitle}`, italic: true }],
      });
    }
    if (metaDesc) {
      blocks.push({
        type: 'paragraph',
        pieces: [{ text: `Meta Description: ${metaDesc}`, italic: true }],
      });
    }
  }

  function resolveValue(node: any): string {
    if (!node) return '';
    if (node.type === 'StringLiteral') return node.value;
    if (node.type === 'Identifier' && stringVars.has(node.name)) {
      return stringVars.get(node.name)!;
    }
    if (node.type === 'TemplateLiteral') {
      return node.quasis.map((q: any) => q.value.raw).join(' ');
    }
    return '';
  }

  function getTagName(nameNode: any): string {
    if (nameNode.type === 'JSXIdentifier') return nameNode.name;
    if (nameNode.type === 'JSXMemberExpression') {
      return `${getTagName(nameNode.object)}.${nameNode.property.name}`;
    }
    return '';
  }

  function getAttributeValue(openingElement: any, attrName: string): string | undefined {
    for (const attr of openingElement.attributes) {
      if (attr.type === 'JSXAttribute' && attr.name && attr.name.name === attrName) {
        if (attr.value) {
          if (attr.value.type === 'StringLiteral') {
            return attr.value.value;
          }
          if (attr.value.type === 'JSXExpressionContainer') {
            return resolveValue(attr.value.expression) || undefined;
          }
        }
      }
    }
    return undefined;
  }

  function gatherPieces(children: any[], currentContext: { isLink?: boolean; href?: string; bold?: boolean; italic?: boolean; code?: boolean } = {}): TextPiece[] {
    const pieces: TextPiece[] = [];

    for (const child of children) {
      if (!child) continue;

      if (child.type === 'JSXText') {
        const text = child.value.replace(/\s+/g, ' ');
        if (text) pieces.push({ text, ...currentContext });
      } else if (child.type === 'JSXExpressionContainer') {
        const val = resolveValue(child.expression);
        if (val) pieces.push({ text: val, ...currentContext });
      } else if (child.type === 'JSXElement') {
        const tag = getTagName(child.openingElement.name);
        const childCtx = { ...currentContext };

        if (tag === 'a' || tag === 'Link') {
          childCtx.isLink = true;
          const href = getAttributeValue(child.openingElement, 'href');
          if (href) childCtx.href = href;
        }
        if (tag === 'strong' || tag === 'b') childCtx.bold = true;
        if (tag === 'em' || tag === 'i') childCtx.italic = true;
        if (tag === 'code') childCtx.code = true;

        pieces.push(...gatherPieces(child.children, childCtx));
      }
    }

    // Clean leading/trailing spaces across combined pieces cleanly
    return pieces.filter((p) => p.text.length > 0);
  }

  function processAstNode(node: any) {
    if (!node) return;

    if (node.type === 'JSXElement') {
      const tagName = getTagName(node.openingElement.name);

      if (/^h[1-6]$/.exec(tagName)) {
        const level = getHeadingLevel(tagName);
        const pieces = gatherPieces(node.children);
        if (pieces.length > 0) {
          blocks.push({ type: 'heading', level, pieces });
        }
        return;
      }

      if (tagName === 'p' || tagName === 'summary' || tagName === 'figcaption') {
        const pieces = gatherPieces(node.children);
        if (pieces.length > 0) {
          blocks.push({ type: 'paragraph', pieces });
        }
        return;
      }

      if (tagName === 'li') {
        const pieces = gatherPieces(node.children);
        if (pieces.length > 0) {
          blocks.push({ type: 'bullet', pieces });
        }
        return;
      }

      // Descend into children for structural elements (div, main, section, details, ul, ol, etc.)
      for (const child of node.children) {
        processAstNode(child);
      }
    }
  }

  // Find return statements in component exports
  traverse(ast, {
    ExportDefaultDeclaration(nodePath: any) {
      nodePath.traverse({
        ReturnStatement(retPath: any) {
          if (retPath.node.argument) {
            processAstNode(retPath.node.argument);
          }
        },
      });
    },
  });

  // If page directory includes associated Markdown files (e.g. changelog release notes), append them
  const dir = path.dirname(filePath);
  const mdFiles = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  for (const mdFile of mdFiles) {
    const mdPath = path.join(dir, mdFile);
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    blocks.push({
      type: 'heading',
      level: HeadingLevel.HEADING_3,
      pieces: [{ text: `Release Notes — ${mdFile}:`, bold: true }],
    });
    blocks.push(...parseMarkdownToBlocks(mdContent));
  }

  return cleanAndMergeBlocks(blocks);
}

function getHeadingLevel(tagName: string): HeadingLevelValue {
  switch (tagName) {
    case 'h1':
      return HeadingLevel.HEADING_1;
    case 'h2':
      return HeadingLevel.HEADING_2;
    case 'h3':
      return HeadingLevel.HEADING_3;
    case 'h4':
      return HeadingLevel.HEADING_4;
    case 'h5':
      return HeadingLevel.HEADING_5;
    case 'h6':
      return HeadingLevel.HEADING_6;
    default:
      return HeadingLevel.HEADING_2;
  }
}

function cleanAndMergeBlocks(blocks: BlockElement[]): BlockElement[] {
  const cleaned: BlockElement[] = [];

  for (const block of blocks) {
    const sanitizedPieces: TextPiece[] = [];
    for (const piece of block.pieces) {
      let t = piece.text;
      if (!t) continue;
      sanitizedPieces.push({ ...piece, text: t });
    }

    const fullText = sanitizedPieces.map((p) => p.text).join('').trim();
    if (fullText) {
      cleaned.push({ ...block, pieces: sanitizedPieces });
    }
  }

  return cleaned;
}

function buildDocxParagraph(block: BlockElement): Paragraph {
  const runs: (TextRun | ExternalHyperlink)[] = [];

  for (const piece of block.pieces) {
    const text = piece.text;
    if (!text) continue;

    if (piece.isLink) {
      const linkTextRun = new TextRun({
        text,
        underline: { type: UnderlineType.SINGLE, color: '0066CC' },
        color: '0066CC',
        bold: piece.bold,
        italics: piece.italic,
        font: 'Calibri',
      });

      if (
        piece.href &&
        (piece.href.startsWith('http://') ||
          piece.href.startsWith('https://') ||
          piece.href.startsWith('mailto:'))
      ) {
        runs.push(
          new ExternalHyperlink({
            children: [linkTextRun],
            link: piece.href,
          })
        );
      } else {
        runs.push(linkTextRun);
      }
    } else {
      runs.push(
        new TextRun({
          text,
          bold: piece.bold,
          italics: piece.italic,
          font: piece.isCode ? 'Consolas' : 'Calibri',
          color: piece.isCode ? 'D63384' : '222222',
        })
      );
    }
  }

  if (block.type === 'heading') {
    return new Paragraph({
      heading: block.level || HeadingLevel.HEADING_2,
      children: runs,
      spacing: { before: 240, after: 120 },
    });
  }

  if (block.type === 'bullet') {
    return new Paragraph({
      bullet: { level: 0 },
      children: runs,
      spacing: { before: 60, after: 60 },
    });
  }

  return new Paragraph({
    children: runs,
    spacing: { before: 100, after: 100 },
  });
}

async function main() {
  const rootDir = process.cwd();
  const appDir = path.join(rootDir, 'src', 'app');
  const docsDir = path.join(rootDir, 'docs');
  const outputFile = path.join(docsDir, 'website_text.docx');

  if (!fs.existsSync(appDir)) {
    console.error(`App directory not found at: ${appDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  console.log('Scanning for page files in src/app...');
  const pageFiles = getPageFiles(appDir);
  console.log(`Found ${pageFiles.length} page files.`);

  const documentChildren: Paragraph[] = [
    new Paragraph({
      text: 'EuroRace Marketing Website Content',
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    }),
    new Paragraph({
      text: `Generated on ${new Date().toISOString().split('T')[0]} for Editorial Review`,
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
    }),
  ];

  for (let i = 0; i < pageFiles.length; i++) {
    const filePath = pageFiles[i];
    const relativePath = path.relative(rootDir, filePath);
    console.log(`[${i + 1}/${pageFiles.length}] Processing ${relativePath}...`);

    // Add heading showing the path and filename
    documentChildren.push(
      new Paragraph({
        text: relativePath,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
        border: {
          bottom: { color: '0066CC', space: 4, style: BorderStyle.SINGLE, size: 12 },
        },
      })
    );

    const blocks = extractJsxText(filePath);
    if (blocks.length === 0) {
      documentChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: '(No text content extracted from this page)',
              italics: true,
            }),
          ],
          spacing: { after: 200 },
        })
      );
    } else {
      for (const block of blocks) {
        documentChildren.push(buildDocxParagraph(block));
      }
    }
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: documentChildren,
      },
    ],
  });

  console.log(`Writing Word document to ${outputFile}...`);
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputFile, buffer);
  console.log(`SUCCESS! Created ${outputFile} (${buffer.length} bytes).`);
}

main().catch((err) => {
  console.error('Error generating website text docx:', err);
  process.exit(1);
});
