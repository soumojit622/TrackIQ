import { SignInButton } from "@clerk/nextjs";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Gem,
  HelpCircle,
  Quote,
  Sparkles,
} from "lucide-react";

const Guest = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-24 sm:py-32 bg-gradient-to-br from-emerald-100/50 via-green-100/40 to-teal-100/40 dark:from-emerald-950/40 dark:via-green-950/30 dark:to-teal-950/40 overflow-hidden transition-colors duration-300">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md backdrop-blur border border-emerald-200/50 dark:border-emerald-700/40 animate-fade-in-down">
            <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
            <span className="hidden sm:inline">
              AI-Enhanced Financial Intelligence
            </span>
            <span className="sm:hidden">Smart Budgeting</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            Master Your Finances with{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              TrackIQ
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400 leading-relaxed mb-10 animate-fade-in-up delay-100">
            Visualize your spending, automate your budgeting, and receive
            instant AI-powered insights — all in one beautifully crafted
            dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14 animate-fade-in-up delay-200">
            <SignInButton>
              <button className="group relative bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
                <span className="flex items-center gap-2 z-10 relative">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-white/10 group-hover:opacity-100 opacity-0 transition-opacity rounded-xl duration-300" />
              </button>
            </SignInButton>

            <button className="border-2 border-emerald-300 dark:border-emerald-600 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 backdrop-blur-md shadow hover:shadow-lg">
              Learn More
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up delay-300">
            {[
              {
                title: "AI Insights",
                desc: "Analyze your financial patterns with smart predictions.",
                icon: <Bot className="w-5 h-5 text-white" />,
                gradient: "from-emerald-500 via-green-500 to-teal-500",
              },
              {
                title: "Auto Categorization",
                desc: "Let AI sort expenses by category intelligently.",
                icon: <Sparkles className="w-5 h-5 text-white" />,
                gradient: "from-green-500 via-teal-500 to-emerald-500",
              },
              {
                title: "Visual Dashboard",
                desc: "See your money in motion through powerful graphs.",
                icon: <BarChart3 className="w-5 h-5 text-white" />,
                gradient: "from-teal-500 via-emerald-500 to-green-500",
              },
            ].map(({ title, desc, icon, gradient }, i) => (
              <div
                key={i}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 mx-auto mb-4 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br ${gradient}`}
                >
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md relative overflow-hidden transition-colors duration-300">
        {/* Gradient top line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

        {/* Container */}
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-emerald-200/50 dark:border-emerald-700/30 backdrop-blur-sm animate-fade-in-down">
              <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-ping" />
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about TrackIQ and how it helps you
              become financially smarter.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "What is TrackIQ?",
                icon: <HelpCircle className="w-5 h-5 text-white" />,
                gradient: "from-emerald-500 via-green-500 to-teal-500",
                answer:
                  "TrackIQ is a smart finance tool that uses AI to analyze, categorize, and optimize your spending while giving you actionable insights into your financial behavior.",
              },
              {
                title: "How does the AI work?",
                icon: <Bot className="w-5 h-5 text-white" />,
                gradient: "from-green-500 via-teal-500 to-emerald-500",
                answer:
                  "Our AI engine processes your transaction data, predicts spending patterns, offers suggestions, and even helps you plan budgets — all in real-time with full privacy.",
              },
              {
                title: "Is TrackIQ free?",
                icon: <Gem className="w-5 h-5 text-white" />,
                gradient: "from-teal-500 via-emerald-500 to-green-500",
                answer:
                  "Yes! TrackIQ has a free plan that includes all core features. For advanced insights, reporting, and integrations, you can upgrade to a premium subscription anytime.",
              },
            ].map(({ title, icon, answer, gradient }, i) => (
              <div
                key={i}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-5">
              <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-ping" />
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              What Our Users{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Say
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Join thousands of satisfied users who’ve improved their spending
              habits with ExpenseTracker AI.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Quote className="w-5 h-5 text-emerald-500 mb-4" />
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  “ExpenseTracker AI has completely transformed my budgeting.
                  The AI insights are incredibly helpful and I now have full
                  control over my finances!”
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      Sarah L.
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Verified User
                    </div>
                  </div>
                </div>
                <div className="text-emerald-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Quote className="w-5 h-5 text-emerald-500 mb-4" />
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  “The AI-powered insights from ExpenseTracker helped me
                  identify and cut down unnecessary expenses. The smart
                  categorization is next-level!”
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      John D.
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Verified User
                    </div>
                  </div>
                </div>
                <div className="text-emerald-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Quote className="w-5 h-5 text-emerald-500 mb-4" />
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  “ExpenseTracker AI is not only smart but super easy to use.
                  Its recommendations are practical and have significantly
                  improved how I handle money.”
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    E
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      Emily R.
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Verified User
                    </div>
                  </div>
                </div>
                <div className="text-emerald-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
