import getRecords from "@/app/actions/getRecords";
import BarChart from "./BarChart";
import { AlertCircle, BarChart2, LineChart } from "lucide-react";

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
            <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Spending Overview
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Analyze your expenses visually
            </p>
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-red-500 dark:border-l-red-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-red-700 dark:text-red-300" />
            </div>
            <p className="text-sm font-semibold text-red-800 dark:text-red-300">
              Unable to Load Chart Data
            </p>
          </div>
          <p className="text-xs text-red-700 dark:text-red-400 ml-9">{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
            <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Spending Chart
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              A clear overview of your financial activity
            </p>
          </div>
        </div>

        {/* Empty Chart State */}
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <LineChart className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-300" />
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1.5">
            No Insights Available
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Once you start logging your expenses, you’ll be able to view and
            analyze your spending behavior here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
          <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            Spending Overview
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Track your expenses with an insightful visual breakdown
          </p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="overflow-x-auto">
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
};

export default RecordChart;
