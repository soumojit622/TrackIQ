import React from "react";
import getUserRecord from "@/app/actions/getUserRecord";
import getBestWorstExpense from "@/app/actions/getBestWorstExpense";
import {
  AlertCircle,
  BarChart3,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const ExpenseStats = async () => {
  try {
    // Fetch both average and range data
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords } = userRecordResult;
    const { bestExpense, worstExpense } = rangeResult;

    // Calculate average expense
    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = validRecord / validDays;

    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          {/* Icon container */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>

          {/* Heading + Subtitle */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense Statistics
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Insightful breakdown of your spending habits
            </p>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Average Daily Spending */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 sm:p-5 border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center space-y-2">
              {/* Title with Icon */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                Average Daily Spending
              </div>

              {/* Amount */}
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                ${averageExpense.toFixed(2)}
              </div>

              {/* Info Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2.5 py-1.5 rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
                Calculated from {validDays} active day{validDays > 1 ? "s" : ""}
              </div>
            </div>
          </div>

          {/* Expense Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Highest Expense */}
            <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-4 rounded-xl border-l-4 border-red-500 hover:bg-red-100/70 dark:hover:bg-red-900/30 transition-shadow shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-300" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Highest Expense
                  </h4>
                  <p className="text-lg font-bold text-red-600 dark:text-red-300 mt-1">
                    {bestExpense !== undefined ? `$${bestExpense}` : "No data"}
                  </p>
                </div>
              </div>
            </div>

            {/* Lowest Expense */}
            <div className="bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm p-4 rounded-xl border-l-4 border-green-500 hover:bg-green-100/70 dark:hover:bg-green-900/30 transition-shadow shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <TrendingDown className="w-4 h-4 text-green-600 dark:text-green-300" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Lowest Expense
                  </h4>
                  <p className="text-lg font-bold text-green-600 dark:text-green-300 mt-1">
                    {worstExpense !== undefined
                      ? `$${worstExpense}`
                      : "No data"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching expense statistics:", error);
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="text-white w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Expense Statistics
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Review your daily trends and financial behavior.
            </p>
          </div>
        </div>

        {/* Error Box */}
        <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-l-red-500 shadow-inner">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-300" />
            </div>
            <p className="text-red-800 dark:text-red-300 font-semibold text-sm sm:text-base">
              Unable to Retrieve Statistics
            </p>
          </div>
          <p className="text-red-700 dark:text-red-400 text-sm ml-11">
            We couldn&apos;t load your insights at this moment. Please refresh
            the page or try again later.
          </p>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;
