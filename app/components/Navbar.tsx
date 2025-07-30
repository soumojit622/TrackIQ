"use client";

import {
  SignInButton,
  UserButton,
  useUser
} from "@clerk/nextjs";
import { Home, Info, LogIn, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "/about", icon: <Info className="w-4 h-4" /> },
  { label: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" /> },
];

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:scale-105 transition"
        >
          <Image
            src="/favicon.png"
            alt="TrackIQ Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
            TrackIQ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 rounded-lg transition"
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>

        {/* Theme + Auth */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {isSignedIn ? (
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200/30 dark:border-emerald-700/30">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox:
                      "w-8 h-8 hover:scale-110 transition-transform duration-200",
                  },
                }}
              />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition hover:scale-[1.02] active:scale-95">
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden border-t border-gray-200 dark:border-gray-700 px-4 py-3">
        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium">
            <span className="flex items-center gap-2">
              <Menu className="w-4 h-4" />
              Menu
            </span>
            <svg
              className="w-4 h-4 ml-1 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <nav className="mt-4 space-y-2">
            {navLinks.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 transition"
              >
                {icon}
                {label}
              </Link>
            ))}

            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="block w-full text-center bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:shadow-md transition hover:scale-[1.02]">
                  Sign In
                </button>
              </SignInButton>
            ) : (
              <div className="mt-3 p-3 flex justify-center bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200/30 dark:border-emerald-700/30 rounded-lg">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-8 h-8 hover:scale-110 transition-transform duration-200",
                    },
                  }}
                />
              </div>
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}
