"use client";

import { useState } from "react";
import { Record } from "@/types/Record";
import deleteRecord from "@/app/actions/deleteRecord";
import {
  Trash2,
  Calendar,
  DollarSign,
  ShoppingCart,
  Car,
  Film,
  Lightbulb,
  HeartPulse,
  Utensils,
  Package,
} from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Food":
      return <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />;
    case "Transportation":
      return <Car className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
    case "Shopping":
      return <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />;
    case "Entertainment":
      return <Film className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />;
    case "Bills":
      return <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />;
    case "Healthcare":
      return <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />;
    default:
      return <Package className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />;
  }
};

const getBorderColor = (amount: number) => {
  if (amount > 100) return "border-red-500";
  if (amount > 50) return "border-yellow-500";
  return "border-green-500";
};

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  return (
    <li
      className={`relative bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100/50 dark:border-gray-600/50 border-l-4 ${getBorderColor(
        record.amount
      )} hover:bg-white/80 dark:hover:bg-gray-700/80 group min-h-[120px] sm:min-h-[140px] flex flex-col justify-between`}
    >
      {/* Delete Button */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        disabled={isLoading}
        aria-label="Delete expense record"
        title="Delete this record"
        className={`absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white dark:border-gray-700 backdrop-blur-sm transform hover:scale-110 transition-all duration-200 ${
          isLoading
            ? "cursor-not-allowed scale-100"
            : "sm:opacity-0 sm:group-hover:opacity-100"
        }`}
      >
        {isLoading ? (
          <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        )}
      </button>

      {/* Record Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Date & Amount */}
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(record.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-900 dark:text-gray-100 text-lg sm:text-xl font-bold">
            <DollarSign className="w-4 h-4" />
            <span>{record.amount.toFixed(2)}</span>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 mt-3">
          {getCategoryIcon(record.category)}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {record.category}
          </span>
        </div>

        {/* Description */}
        <div className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 break-words">
          {record.text || "No description provided."}
        </div>
      </div>
    </li>
  );
};

export default RecordItem;
