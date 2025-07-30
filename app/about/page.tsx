import {
  ArrowRightCircle,
  BarChart2,
  Bot,
  DollarSign,
  Globe,
  InfoIcon,
  MessageCircle,
  Palette,
  Rocket,
  Smile,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30">
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-md backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30">
            <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-300 animate-pulse" />
            <span className="hidden sm:inline">
              Empowered by Intelligent Systems
            </span>
            <span className="sm:hidden">AI Inside</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            <Bot className="inline-block w-5 h-5 mr-2 -mt-1 text-emerald-500 dark:text-emerald-400" />
            The smart solution for monitoring your spending and optimizing your
            finances — all powered by next-gen AI intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <Link
              href="/sign-up"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <ArrowRightCircle className="w-5 h-5 mr-2 text-white" />
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-2 border-emerald-500/30 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              <InfoIcon className="w-4 h-4" />
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        {/* Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

        {/* Content Container */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></span>
            Our Purpose
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-gray-900 dark:text-white leading-tight">
            Redefining{" "}
            <span className="text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text">
              Financial Management with AI
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At <strong>ExpenseTracker AI</strong>, we’re leveraging cutting-edge
            artificial intelligence to reshape the way you manage your money.
            From analyzing your spending behavior to offering tailored insights,
            we equip you with smart tools for confident, goal-driven financial
            decisions.
          </p>

          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Active Users */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-3">
                <Users className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                10K+
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400 font-medium">
                Engaged Users
              </p>
            </div>

            {/* Money Tracked */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-800/50 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-3">
                <DollarSign className="w-6 h-6 text-green-500 dark:text-green-400" />
              </div>
              <div className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                $2M+
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400 font-medium">
                Tracked & Analyzed
              </p>
            </div>

            {/* Satisfaction */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-3">
                <Smile className="w-6 h-6 text-teal-500 dark:text-teal-400" />
              </div>
              <div className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                99%
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400 font-medium">
                Satisfaction Score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
        {/* 🌿 Top green line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow">
              <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
              Highlights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text">
                ExpenseTracker AI
              </span>{" "}
              Stands Out
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore the smart features that make our AI-driven finance tool a
              game-changer in budgeting and expense tracking.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Smart AI Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Understand your spending habits better with intelligent
                  suggestions, AI-backed analysis, and behavior-based
                  categorization.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Automatic Categorization
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Let the AI handle your transactions by organizing expenses
                  with high accuracy and offering insights to help you stay
                  financially focused.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Visual Financial Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Get real-time data, rich visualizations, and
                  easy-to-understand analytics to track your progress and boost
                  financial clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
        {/* 🌿 Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              Designed for the{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text">
                Next Generation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The idea behind <strong>ExpenseTracker AI</strong> was simple:
                bring intelligence to personal finance. A passionate team of
                technologists, financial experts, and data scientists came
                together to create tools that make money management easier,
                smarter, and more personalized.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Since launching, we’ve empowered thousands to better understand
                their finances, reduce stress, and build stronger budgets—all
                powered by AI. Every feature we create is designed with clarity,
                impact, and user empowerment at its core.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-2 border-white dark:border-gray-800" />
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="font-semibold">
                    10,000+ users and counting
                  </div>
                  <div>Be a part of our growing mission</div>
                </div>
              </div>
            </div>

            {/* Facts Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 space-y-6 shadow-md">
              <div className="flex items-center gap-4">
                <Rocket className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                <div className="text-gray-900 dark:text-white font-medium">
                  Launched in 2024
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Bot className="w-5 h-5 text-green-500 dark:text-green-400" />
                <div className="text-gray-900 dark:text-white font-medium">
                  Built on AI from Day One
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                <div className="text-gray-900 dark:text-white font-medium">
                  Serving a Global Audience
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Palette className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                <div className="text-gray-900 dark:text-white font-medium">
                  Designed with Users in Mind
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

        {/* Green top border line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></span>
            Ready to Elevate Your Finances?
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
            Take Charge of Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Financial Journey
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Thousands have already transformed how they manage money using
            <strong> ExpenseTracker AI</strong>. Start making smarter financial
            choices today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start for Free
                <span className="text-lg">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/contact"
              className="group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
            >
              Get in Touch
              <MessageCircle className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                Free
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                No credit card needed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Round-the-clock AI assistance
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                Instant
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Set up and start within minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
