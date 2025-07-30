"use client";

import { Clock, HelpCircle, Mail, MapPin, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30">
        {/* Grid background overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30">
            <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
            Contact Us
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Connect with{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions or need guidance with our AI-powered financial tools?
            We're here to support your journey to smarter money management.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-0">
            {/* Email CTA */}
            <a
              href="mailto:support@expensetracker-ai.com"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="relative z-10">Email Our Team</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* Phone CTA */}
            <a
              href="tel:+11234567890"
              className="group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
              Contact Information
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 px-2 sm:px-0">
              Multiple Ways to{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Connect
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
              Reach out to the ExpenseTracker AI team through the method that
              works best for you.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Email Support */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
                  Email Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Get in-depth assistance from our support team. We typically
                  respond within 24 hours.
                </p>
                <a
                  href="mailto:support@expensetracker-ai.com"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal"
                >
                  <span className="hidden sm:inline">support@trackiq.com</span>
                  <span className="sm:hidden">Email Us</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Phone Support */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto">
                  <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
                  Phone Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Talk directly with our team for faster assistance on
                  time-sensitive issues.
                </p>
                <a
                  href="tel:+11234567890"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  +1 (123) 456-7890
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Office Location */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-center sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
                  Office Location
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Drop by our headquarters for personal consultations or
                  business collaborations.
                </p>
                <div className="text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base">
                  123 AI Innovation St
                  <br />
                  Tech City, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours & FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
              Support Information
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 px-2 sm:px-0">
              We’re Here to{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Help
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Support Hours */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                  Support Hours
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM – 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM – 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                    <strong>Email Support:</strong> Available 24/7 — we respond
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                  Quick Help
                </h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-sm mb-1">
                    Technical Issues
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Experiencing glitches? Check our troubleshooting guide for
                    solutions.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-sm mb-1">
                    AI Features
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Curious about AI-powered insights? Explore our detailed AI
                    documentation.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-sm mb-1">
                    Account & Billing
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Have billing questions or account troubles? Reach out to our
                    team for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
