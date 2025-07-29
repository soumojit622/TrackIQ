import Link from "next/link";
import { Bot, Sparkles, BarChart3 } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-900 border-t border-gray-100/50 dark:border-gray-700/50 transition-colors duration-300">
      {/* Gradient stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/favicon.png"
                alt="TrackIQ Logo"
                width={36}
                height={36}
                className="rounded-full bg-white dark:bg-gray-800 p-1 shadow-md"
              />
              <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                TrackIQ
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
              AI-powered expense tracking for smarter budgeting and deeper
              financial insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition duration-200"
                  aria-label={`Navigate to ${label}`}
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Features
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: <Bot className="w-4 h-4 text-white" />,
                  text: "AI Insights",
                  gradient: "from-emerald-500 to-green-500",
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-white" />,
                  text: "Auto Categorization",
                  gradient: "from-green-500 to-teal-500",
                },
                {
                  icon: <BarChart3 className="w-4 h-4 text-white" />,
                  text: "Analytics Dashboard",
                  gradient: "from-teal-500 to-emerald-500",
                },
              ].map(({ icon, text, gradient }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm"
                >
                  <div
                    className={`w-6 h-6 bg-gradient-to-br ${gradient} rounded-md flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200`}
                  >
                    {icon}
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} TrackIQ. All rights reserved.
          </p>

          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium transition-colors">
            <Image
              src="/male.jpg"
              alt="Soumojit Banerjee"
              width={24}
              height={24}
              className="rounded-full border border-emerald-300 dark:border-emerald-700 shadow-sm"
            />
            Made by Soumojit Banerjee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
