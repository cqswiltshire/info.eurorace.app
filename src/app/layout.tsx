import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EuroRace",
  description: "Explore Europe racing in teams",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
