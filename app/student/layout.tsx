'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";

import { courses as allCourses, Assignment, Material } from "@/app/data/courses";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  level: string;
  duration: string;
  lessons: number;
  progress: number;
  status: 'Not Started' | 'In Progress' | 'Completed';
  assignments?: Assignment[];
  materials?: Material[];
};

type StudentCoursesContextValue = {
  enrolledCourses: Course[];
  enrollCourse: (course: any) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
};

const StudentCoursesContext = createContext<StudentCoursesContextValue | undefined>(undefined);

export function useStudentCourses() {
  const context = useContext(StudentCoursesContext);
  if (!context) {
    throw new Error('useStudentCourses must be used within StudentLayout');
  }
  return context;
}

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const linkClasses = (href: string) => {
    const isActive = pathname === href;
    return [
      "flex items-center px-4 py-3 text-sm transition-all duration-200 group relative",
      isActive
        ? "text-[#4F46E5] font-semibold bg-gradient-to-r from-[#4F46E5]/10 via-[#4F46E5]/5 to-transparent"
        : "text-gray-600 hover:text-[#4F46E5] hover:bg-gray-50/80"
    ].join(" ");
  };

  const enrollCourse = (course: any) => {
    setEnrolledCourses((prev) => {
      if (prev.some((item) => item.id === course.id)) return prev;
      
      const fullCourseData = allCourses.find(c => c.id === course.id);
      
      const newEnrolledCourse: Course = {
        id: course.id,
        title: course.title,
        description: course.description,
        image: course.image,
        instructor: course.instructor,
        level: course.level,
        duration: course.duration,
        lessons: course.lessons,
        progress: 0,
        status: 'Not Started',
        assignments: fullCourseData?.assignments || [],
        materials: fullCourseData?.materials || [],
      };
      
      return [...prev, newEnrolledCourse];
    });
  };

  const navItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { href: "/student/courses", label: "Courses", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { href: "/student/my-courses", label: "My Courses", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    )},
  ];

  return (
    <StudentCoursesContext.Provider value={{ enrolledCourses, enrollCourse, isSidebarCollapsed, toggleSidebar }}>
      <div className="h-screen bg-[#F9FAFB] font-sans flex overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-30 fixed left-0 top-0 h-screen overflow-hidden ${
            isSidebarCollapsed ? "w-16" : "w-64"
          }`}
        >
          <nav className="flex-1 py-6 overflow-hidden">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClasses(item.href)}>
                    <span className={`flex-shrink-0 transition-colors ${isSidebarCollapsed ? "mx-auto" : ""} ${pathname === item.href ? "text-[#4F46E5]" : "text-gray-400 group-hover:text-[#4F46E5]"}`}>
                      {item.icon}
                    </span>
                    {!isSidebarCollapsed && (
                      <span className="ml-3 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
                        {item.label}
                      </span>
                    )}
                    {pathname === item.href && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F46E5] rounded-r-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-100 overflow-hidden">
            <Link
              href="/signup"
              className={`flex items-center px-4 py-3 text-sm text-gray-500 hover:text-[#4F46E5] transition-colors ${isSidebarCollapsed ? "justify-center" : "justify-start"}`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {!isSidebarCollapsed && <span className="ml-3 whitespace-nowrap overflow-hidden">Switch Role</span>}
            </Link>
          </div>
        </aside>

        {/* Main Content Container */}
        <div 
          className={`flex-1 flex flex-col min-w-0 h-screen transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          {/* Top Header */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-20 flex-shrink-0">
            <div className="flex items-center gap-3">
              <Link href="/student/dashboard" className="font-bold text-2xl tracking-tight text-[#111827] hover:opacity-90 transition-opacity">
                Classroom
              </Link>
              <button 
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                aria-label="Toggle Sidebar"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors relative">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900 leading-none">John Student</p>
                  <p className="text-xs text-gray-500 mt-1">Student Account</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  JS
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto px-8 pt-6 pb-8">
            {children}
          </main>
        </div>
      </div>
    </StudentCoursesContext.Provider>
  );
}
