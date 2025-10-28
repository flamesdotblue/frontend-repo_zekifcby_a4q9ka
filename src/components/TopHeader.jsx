import React from 'react';
import { ChevronDown, Search, Filter, SlidersHorizontal, BarChart3, Plus } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-gradient-to-r from-white via-white to-blue-50/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="px-6 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 shadow-sm border border-gray-200">
          <div className="text-sm font-semibold text-gray-900">Marketing Website Revamp</div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks, people, updates..."
            className="w-full rounded-xl border border-gray-200 bg-white/80 pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 hover:bg-white shadow-sm">
            <Filter className="h-4 w-4 text-gray-500" />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 hover:bg-white shadow-sm">
            <SlidersHorizontal className="h-4 w-4 text-gray-500" />
            Display
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 hover:bg-white shadow-sm">
            <BarChart3 className="h-4 w-4 text-gray-500" />
            Analytics
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-3 py-2 text-sm text-white shadow-md hover:shadow-lg">
            <Plus className="h-4 w-4" />
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
