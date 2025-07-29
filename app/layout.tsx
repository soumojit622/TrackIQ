import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackIQ | AI-Powered Expense Management",
  description:
    "TrackIQ is a professional AI-driven expense management solution designed to help individuals and businesses monitor spending, optimize budgets, and make data-informed financial decisions.",
  keywords: [
    "TrackIQ",
    "AI expense tracker",
    "expense management",
    "budget optimization",
    "finance tracker",
    "smart budgeting",
    "expense analysis",
    "AI finance tool",
  ],
  authors: [
    {
      name: "Soumojit Banerjee",
      url: "https://github.com/soumojit622",
    },
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
