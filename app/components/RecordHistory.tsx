import getRecords from "@/app/actions/getRecords";
import { Record } from "@/types/Record";
import RecordItem from "./RecordItem";
import { FileText, AlertTriangle, NotebookPen, BarChart } from "lucide-react";

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  const Header = () => (
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
        <NotebookPen className="text-white w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
          Expense History
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Your spending timeline
        </p>
      </div>
    </div>
  );

  // ❌ Error state
  if (error) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50">
        <Header />
        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-l-red-500 p-3 sm:p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-300" />
            </div>
            <h4 className="font-bold text-red-800 dark:text-red-300 text-sm">
              Error loading expense history
            </h4>
          </div>
          <p className="text-red-700 dark:text-red-400 ml-8 sm:ml-10 text-xs">
            {error}
          </p>
        </div>
      </div>
    );
  }

  // 📭 Empty state
  if (!records || records.length === 0) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50">
        <Header />
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BarChart className="text-emerald-700 dark:text-emerald-300 w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            No Expense Records Found
          </h4>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm">
            Start tracking your expenses to view your history and trends here.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Data display
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordHistory;
