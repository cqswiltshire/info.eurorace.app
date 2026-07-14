import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface ChangelogEntry {
  version: string;
  date: string;
  content: string;
  major: number;
  minor: number;
}

export default async function ChangelogPage() {
  const changelogDir = path.join(process.cwd(), 'src/app/changelog');
  
  let files: string[] = [];
  try {
    files = fs.readdirSync(changelogDir).filter(file => file.endsWith('.md') && file.startsWith('v'));
  } catch (e) {
    console.error("Failed to read changelog directory", e);
  }

  const entries: ChangelogEntry[] = files.map(file => {
    const filePath = path.join(changelogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    const lines = fileContent.split('\n');
    const firstLine = lines[0];
    const restContent = lines.slice(1).join('\n').trim();
    
    // Parse version and date
    // Example: # Release Notes — V1.1 (2026-07-14)
    const versionMatch = firstLine.match(/V(\d+)\.(\d+)/i);
    const dateMatch = firstLine.match(/\((.*?)\)/);
    
    const major = versionMatch ? parseInt(versionMatch[1], 10) : 0;
    const minor = versionMatch ? parseInt(versionMatch[2], 10) : 0;
    const version = versionMatch ? `${major}.${minor}` : file.replace('.md', '').replace('v', '');
    const date = dateMatch ? dateMatch[1] : '';

    return {
      version,
      date,
      content: restContent,
      major,
      minor
    };
  });

  // Sort descending by major, then minor
  entries.sort((a, b) => {
    if (b.major !== a.major) return b.major - a.major;
    return b.minor - a.minor;
  });

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start p-8 relative">
      <div className="max-w-3xl w-full space-y-12 animate-in fade-in zoom-in duration-700 pt-12">
        <div className="flex flex-col gap-4 mb-8">
          <Link href="/" className="text-primary hover:underline font-medium mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary drop-shadow-sm">
            Changelog
          </h1>
          <p className="text-xl text-muted-foreground">
            Keep track of all the new features, improvements, and bug fixes in EuroRace.
          </p>
        </div>

        <div className="space-y-16">
          {entries.map((entry) => (
            <div key={entry.version} className="relative pl-8 sm:pl-12">
              {/* Timeline styling */}
              <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-sm" />
              <div className="absolute left-[0.45rem] top-8 bottom-[-4rem] w-0.5 bg-border last:hidden" />
              
              <div className="mb-6">
                <h2 className="text-3xl font-bold flex flex-wrap items-center gap-4 text-foreground">
                  Version {entry.version}
                  {entry.date && (
                    <span className="text-sm font-medium px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full shadow-sm border border-border/50">
                      {entry.date}
                    </span>
                  )}
                </h2>
              </div>
              <div className="markdown-body">
                <ReactMarkdown
                  components={{
                    h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground drop-shadow-sm" {...props} />,
                    p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed mb-6" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-3 mb-8 text-muted-foreground" {...props} />,
                    li: ({node, ...props}) => <li className="pl-1" {...props} />,
                    strong: ({node, ...props}) => <strong className="text-foreground font-semibold" {...props} />,
                    a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                  }}
                >
                  {entry.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {entries.length === 0 && (
            <p className="text-muted-foreground text-center py-12">No changelog entries found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
