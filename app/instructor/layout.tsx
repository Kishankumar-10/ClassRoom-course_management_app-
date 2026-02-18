'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const navLinks = [
    { name: 'Dashboard', href: '/instructor/dashboard', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { name: 'My Courses', href: '/instructor/courses', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { name: 'Create Course', href: '/instructor/create-course', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )},
  ];

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`bg-white border-r border-[#E5E7EB] flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out fixed left-0 top-0 h-screen z-30 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section (hidden when collapsed) */}
          {!isSidebarCollapsed && (
            <div className="h-16 flex items-center px-6 border-b border-[#E5E7EB]">
              <span className="text-xl font-bold text-[#111827]">Classroom</span>
            </div>
          )}
          {isSidebarCollapsed && (
            <div className="h-16 flex items-center justify-center border-b border-[#E5E7EB]">
              <span className="text-xl font-bold text-indigo-600">C</span>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1">
            {!isSidebarCollapsed && (
              <p className="px-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                Instructor Menu
              </p>
            )}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                >
                  <span className={`flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}`}>
                    {link.icon}
                  </span>
                  {!isSidebarCollapsed && (
                    <span className="ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-300">
                      {link.name}
                    </span>
                  )}
                  {isActive && !isSidebarCollapsed && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-indigo-600 rounded-r-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Switch Role Section */}
          <div className="mt-auto px-3 py-4 border-t border-[#E5E7EB]">
            <Link
              href="/student/dashboard"
              className={`flex items-center px-4 py-2 text-sm text-[#6B7280] hover:text-[#4F46E5] transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              {!isSidebarCollapsed && <span className="ml-3 whitespace-nowrap overflow-hidden">Switch to Student View</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Container */}
      <div 
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-6 z-20 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle Sidebar"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/instructor/dashboard" className="font-bold text-xl tracking-tight text-[#111827] sm:hidden">
              Classroom
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 leading-none">Instructor Name</p>
                <p className="text-xs text-gray-500 mt-1">Instructor Account</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                IN
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto px-6 pt-6 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}
