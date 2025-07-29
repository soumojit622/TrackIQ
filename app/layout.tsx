import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ClerkThemeProvider from "./components/ClerkThemeProvider";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${font.className} `}>
        <ThemeProvider>
          <ClerkThemeProvider>
            <Navbar />
            {children}
            <Footer/>
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
