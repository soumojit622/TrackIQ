"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Home, Info, Phone, Menu, X, LogIn } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-600/50 shadow-lg shadow-gray-900/5 dark:shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105"
              onClick={closeMobileMenu}
            >
              <Image
                src="/favicon.png"
                alt="TrackIQ Logo"
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                <span className="hidden sm:inline">TrackIQ</span>
                <span className="sm:hidden">TrackIQ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: "Home", href: "/", Icon: Home },
              { label: "About", href: "/about", Icon: Info },
              { label: "Contact", href: "/contact", Icon: Phone },
            ].map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="p-0.5 sm:p-1">
              <ThemeToggle />
            </div>

            {/* Auth Buttons (desktop) */}
            <div className="hidden sm:block">
              <SignedOut>
                <SignInButton>
                  <button className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2">
                    <span>Sign In</span>
                    <LogIn className="w-4 h-4" />
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200",
                        userButtonBox: "flex items-center justify-center",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-200 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-3 sm:pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50 mt-2 shadow-lg">
            {[
              { label: "Home", href: "/", Icon: Home },
              { label: "About", href: "/about", Icon: Info },
              { label: "Contact", href: "/contact", Icon: Phone },
            ].map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Mobile Auth */}
            <div className="pt-3 border-t border-gray-200/50 dark:border-gray-600/50">
              <SignedOut>
                <SignInButton>
                  <button
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Sign In</span>
                    <LogIn className="w-4 h-4" />
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-8 h-8 hover:scale-110 transition-transform duration-200",
                        userButtonBox: "flex items-center justify-center",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
