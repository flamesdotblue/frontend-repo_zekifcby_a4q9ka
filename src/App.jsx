import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import TopHeader from './components/TopHeader.jsx';
import TaskBoard from './components/TaskBoard.jsx';
import RightPanel from './components/RightPanel.jsx';

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-gray-900">
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <TopHeader />
          <TaskBoard />
        </main>
        <RightPanel />
      </div>
      <div className="pointer-events-none fixed inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50/50 to-transparent" />
    </div>
  );
}
