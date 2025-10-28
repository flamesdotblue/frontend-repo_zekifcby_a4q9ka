import React from 'react';
import { Home, Inbox, User, FolderKanban, Cycle, Layers, BarChart3, BookOpen, Eye, Settings, ChevronDown, Plus, LogOut, MessageSquare } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <div className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors cursor-pointer ${
    active ? 'bg-white/70 text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
  }`}>
    <Icon className={`h-4 w-4 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`} />
    <span className="font-medium">{label}</span>
  </div>
);

const ProjectItem = ({ name, active = false }) => (
  <div className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors ${
    active ? 'bg-white/70 text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
  }`}>
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-teal-500 text-white grid place-items-center text-[10px] font-bold">
        {name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase()}
      </div>
      <span className="truncate max-w-[140px]">{name}</span>
    </div>
    <ChevronDown className="h-4 w-4 text-gray-400" />
  </div>
);

export default function Sidebar() {
  return (
    <aside className="h-full w-72 shrink-0 border-r border-gray-200 bg-gray-50/80 backdrop-blur-sm flex flex-col justify-between">
      <div>
        <div className="px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-md grid place-items-center text-white font-bold">TO</div>
            <div>
              <div className="text-sm font-semibold text-gray-900 leading-none">TaskOrbit</div>
              <div className="text-xs text-gray-500">Project Management</div>
            </div>
          </div>
        </div>
        <div className="px-3 space-y-1">
          <NavItem icon={Home} label="Home" active />
          <NavItem icon={Inbox} label="Inbox" />
          <NavItem icon={User} label="My Work" />
        </div>
        <div className="px-4 pt-4 pb-1 text-xs font-medium text-gray-500">Projects</div>
        <div className="px-3 space-y-1">
          <ProjectItem name="Marketing Website Revamp" active />
          <ProjectItem name="Mobile App Launch" />
          <ProjectItem name="Internal Design System" />
          <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 cursor-pointer px-3 py-2 rounded-lg hover:bg-white/50">
            <Plus className="h-4 w-4" />
            <span className="text-sm">New Project</span>
          </div>
        </div>
        <div className="px-4 pt-4 pb-1 text-xs font-medium text-gray-500">Plan</div>
        <div className="px-3 space-y-1">
          <NavItem icon={Cycle} label="Cycles" />
          <NavItem icon={Layers} label="Modules" />
          <NavItem icon={BarChart3} label="Analytics" />
          <NavItem icon={BookOpen} label="Wiki" />
          <NavItem icon={Eye} label="Views" />
          <NavItem icon={Settings} label="Settings" />
        </div>
      </div>

      <div className="p-3 border-t border-gray-200 space-y-2">
        <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=Alex%20Morgan&radius=50&backgroundType=gradientLinear&fontFamily=Inter`}
            alt="User"
            className="h-8 w-8 rounded-lg"
          />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">Alex Morgan</div>
            <div className="text-xs text-gray-500 truncate">alex@taskorbit.app</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1 rounded-lg hover:bg-white/50">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">Feedback</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1 rounded-lg hover:bg-white/50">
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
