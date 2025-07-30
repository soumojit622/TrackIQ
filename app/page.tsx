import { currentUser } from "@clerk/nextjs/server";
import Guest from "./components/Guest";
import AddNewRecord from "./components/AddNewRecord";
import RecordChart from "./components/RecordChart";
import ExpenseStats from "./components/ExpenseStats";
import AIInsights from "./components/AIInsights";
import RecordHistory from "./components/RecordHistory";
import { CalendarDays, Clock, Sparkles, UserCheck } from "lucide-react";

export default async function HomePage() {
  const user = await currentUser();
  if (!user) return <Guest />;

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* User Welcome Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                {/* Profile */}
                <div className="relative flex-shrink-0">
                  <img
                    src={user.imageUrl}
                    alt={`${user.firstName}'s profile`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white dark:border-gray-600 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
                      Welcome back, {user.firstName}!
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 max-w-lg mx-auto sm:mx-0">
                    Here’s a quick snapshot of your recent financial activity.
                    Stay informed, analyze trends, and optimize your budget with
                    ease.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start">
                    {/* Joined Date */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 border border-emerald-100 dark:border-emerald-800 w-full sm:w-auto">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-md flex items-center justify-center">
                        <CalendarDays className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block">
                          Joined
                        </span>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {/* Last Active */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-100 dark:border-green-800 w-full sm:w-auto">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-md flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block">
                          Last Active
                        </span>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {user.lastActiveAt
                            ? new Date(user.lastActiveAt).toLocaleDateString()
                            : "Today"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Record */}
            <AddNewRecord />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <RecordChart />
            <ExpenseStats />
          </div>
        </div>

        {/* BOTTOM FULL WIDTH SECTION */}
        <div className="mt-10 space-y-6">
          <AIInsights />
          <RecordHistory />
        </div>
      </div>
    </main>
  );
}
