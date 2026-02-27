import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompassPM by Noventra - AI-Native Product Management",
  description:
    "The AI-native product and project management workspace. Find every gap, fix everything in one command. Connect to Jira, Notion, Confluence, and Slack.",
  keywords: [
    "product management",
    "AI",
    "project management",
    "Jira",
    "Notion",
    "Slack",
    "SaaS",
  ],
  openGraph: {
    title: "CompassPM by Noventra",
    description: "AI-native product management workspace - Cursor for PMs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
