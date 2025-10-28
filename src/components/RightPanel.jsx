import React from 'react';
import { CheckCircle2, AlertTriangle, Clock3, FileCheck2 } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
    <div className={`h-9 w-9 rounded-lg grid place-items-center ${color}`}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div className="flex-1">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
    </div>
  </div>
);

const ActivityItem = ({ user, action, when }) => (
  <div className="flex items-start gap-3">
    <img
      src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user)}&radius=50&backgroundType=gradientLinear&fontFamily=Inter`}
      alt={user}
      className="h-8 w-8 rounded-lg"
    />
    <div className="text-sm">
      <span className="font-medium text-gray-900">{user}</span>
      <span className="text-gray-600"> {action}</span>
      <div className="text-xs text-gray-500">{when}</div>
    </div>
  </div>
);

export default function RightPanel() {
  return (
    <aside className="h-full w-80 shrink-0 border-l border-gray-200 bg-gray-50/60 p-4 space-y-4">
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-2">Quick Metrics</div>
        <div className="grid grid-cols-2 gap-3">
          <MetricCard icon={Clock3} label="Open Tasks" value="42" color="bg-blue-500" />
          <MetricCard icon={FileCheck2} label="Reviews Pending" value="8" color="bg-amber-500" />
          <MetricCard icon={AlertTriangle} label="Blocked" value="3" color="bg-rose-500" />
          <MetricCard icon={CheckCircle2} label="Due Today" value="5" color="bg-teal-500" />
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="text-xs font-semibold text-gray-500 mb-2">Current Cycle</div>
        <div className="flex items-center justify-between text-sm mb-2">
          <div className="text-gray-900 font-medium">Sprint 14</div>
          <div className="text-gray-500">68% complete</div>
        </div>
        <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-600 to-teal-500"></div>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
          <span>Ends in 4 days</span>
          <span>12/18 tasks done</span>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm space-y-3">
        <div className="text-xs font-semibold text-gray-500">Team Activity</div>
        <ActivityItem user="Priya Sharma" action="moved MW-15 to Review" when="2m ago" />
        <ActivityItem user="Daniel Kim" action="commented on MW-09" when="18m ago" />
        <ActivityItem user="Alex Morgan" action="closed MW-03" when="1h ago" />
        <ActivityItem user="Sara Wang" action="added a task to Backlog" when="3h ago" />
      </div>
    </aside>
  );
}
