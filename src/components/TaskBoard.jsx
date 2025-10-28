import React from 'react';
import { CalendarDays, Flag, MessageSquareMore, Paperclip, CheckCircle2, MoreHorizontal } from 'lucide-react';

const tagColors = {
  Design: 'bg-pink-100 text-pink-700',
  DevOps: 'bg-indigo-100 text-indigo-700',
  QA: 'bg-amber-100 text-amber-700',
  Frontend: 'bg-blue-100 text-blue-700',
  Backend: 'bg-teal-100 text-teal-700',
  Marketing: 'bg-emerald-100 text-emerald-700',
};

const priorityColors = {
  High: 'bg-rose-100 text-rose-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-gray-100 text-gray-700',
};

const ColumnHeader = ({ title, count, color }) => (
  <div className="flex items-center justify-between px-2 pb-2">
    <div className="flex items-center gap-2">
      <div className={`h-2.5 w-2.5 rounded-full ${color}`}></div>
      <div className="text-sm font-semibold text-gray-800">{title}</div>
      <div className="text-xs text-gray-500">{count}</div>
    </div>
    <MoreHorizontal className="h-4 w-4 text-gray-400" />
  </div>
);

const TaskCard = ({ task }) => (
  <div className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-[11px] font-semibold tracking-wide text-gray-500">{task.id}</div>
        <div className="mt-1 text-sm font-medium text-gray-900 leading-snug">{task.title}</div>
      </div>
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(task.owner)}&radius=50&backgroundType=gradientLinear&fontFamily=Inter`}
        alt={task.owner}
        className="h-7 w-7 rounded-lg shrink-0"
      />
    </div>

    <div className="mt-2 flex flex-wrap gap-1.5">
      {task.tags.map((t) => (
        <span key={t} className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${tagColors[t] || 'bg-gray-100 text-gray-700'}`}>
          {t}
        </span>
      ))}
      {task.priority && (
        <span className={`ml-auto inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ${priorityColors[task.priority]}`}>
          <Flag className="h-3 w-3" /> {task.priority}
        </span>
      )}
    </div>

    <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
      {task.due && (
        <div className="inline-flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" /> {task.due}
        </div>
      )}
      {task.comments ? (
        <div className="inline-flex items-center gap-1">
          <MessageSquareMore className="h-3.5 w-3.5" /> {task.comments}
        </div>
      ) : null}
      {task.attachments ? (
        <div className="inline-flex items-center gap-1">
          <Paperclip className="h-3.5 w-3.5" /> {task.attachments}
        </div>
      ) : null}
      {task.done && (
        <div className="ml-auto inline-flex items-center gap-1 text-teal-600">
          <CheckCircle2 className="h-3.5 w-3.5" /> Done
        </div>
      )}
    </div>
  </div>
);

const sampleData = {
  Backlog: [
    { id: 'MW-01', title: 'Create Brand Guidelines', tags: ['Design'], owner: 'Priya Sharma', due: 'Jul 22', priority: 'Medium', comments: 3 },
    { id: 'MW-02', title: 'SEO Keywords Research', tags: ['Marketing'], owner: 'Daniel Kim', priority: 'Low' },
    { id: 'MW-04', title: 'QA Plan', tags: ['QA'], owner: 'Alex Morgan', comments: 1 },
  ],
  Todo: [
    { id: 'MW-06', title: 'Landing Page Copy', tags: ['Marketing'], owner: 'Sara Wang', due: 'Jul 20', priority: 'High', attachments: 2 },
  ],
  'In Progress': [
    { id: 'MW-09', title: 'Implement Auth API', tags: ['Backend', 'DevOps'], owner: 'Alex Morgan', due: 'Jul 19', priority: 'High', comments: 5 },
    { id: 'MW-10', title: 'UI Polish', tags: ['Frontend', 'Design'], owner: 'Priya Sharma', priority: 'Medium' },
  ],
  Review: [
    { id: 'MW-15', title: 'QA Testing', tags: ['QA'], owner: 'Daniel Kim', comments: 2 },
    { id: 'MW-16', title: 'Update Notification Center', tags: ['Frontend'], owner: 'Sara Wang', due: 'Jul 18' },
  ],
  Done: [
    { id: 'MW-03', title: 'Dashboard Overview', tags: ['Frontend', 'Design'], owner: 'Alex Morgan', done: true },
    { id: 'MW-07', title: 'Slack Integration', tags: ['Backend'], owner: 'Daniel Kim', done: true },
  ],
  Cancelled: [
    { id: 'MW-12', title: 'Legacy Migration Plan', tags: ['Backend'], owner: 'Alex Morgan' },
  ],
};

const columns = [
  { key: 'Backlog', color: 'bg-gray-400' },
  { key: 'Todo', color: 'bg-blue-400' },
  { key: 'In Progress', color: 'bg-amber-400' },
  { key: 'Review', color: 'bg-violet-400' },
  { key: 'Done', color: 'bg-teal-500' },
  { key: 'Cancelled', color: 'bg-rose-400' },
];

export default function TaskBoard() {
  return (
    <div className="px-6 py-4 overflow-x-auto">
      <div className="min-w-[1100px] grid grid-cols-6 gap-4">
        {columns.map((col) => (
          <div key={col.key} className="rounded-2xl bg-gray-50/60 border border-gray-200">
            <div className="sticky top-[64px] z-0 bg-gray-50/80 backdrop-blur px-3 pt-3">
              <ColumnHeader title={col.key} count={sampleData[col.key]?.length || 0} color={col.color} />
            </div>
            <div className="p-3 space-y-3">
              {sampleData[col.key]?.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
