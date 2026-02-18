"use client";

import Link from "next/link";
import { useStudentCourses } from "../layout";

export default function StudentDashboardPage() {
  const { enrolledCourses } = useStudentCourses();

  const recentActivities = [
    { id: 1, course: "Introduction to Web Development", progress: 65, lastAccessed: "2 days ago" },
    { id: 2, course: "Advanced UI/UX Design Patterns", progress: 30, lastAccessed: "3 days ago" },
    { id: 3, course: "Business Analytics with Python", progress: 10, lastAccessed: "5 days ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Track your learning progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Enrolled Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider group-hover:text-[#4F46E5] transition-colors">
            Total Enrolled Courses
          </h3>
          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl font-bold text-gray-900">
              {enrolledCourses.length}
            </p>
            <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+2 this week</span>
          </div>
          <div className="mt-6 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(79,70,229,0.3)]" 
              style={{ width: enrolledCourses.length > 0 ? '75%' : '0%' }}
            />
          </div>
        </div>

        {/* Browse Courses Card */}
        <Link
          href="/student/courses"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider group-hover:text-[#4F46E5] transition-colors">
              Browse Courses
            </h3>
            <p className="mt-4 text-base font-semibold text-gray-900">
              Find your next favorite course
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center w-full py-3 bg-[#4F46E5]/5 text-[#4F46E5] text-sm font-bold rounded-lg group-hover:bg-[#4F46E5] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#4F46E5]/20 transition-all duration-300">
            Explore catalog
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>

        {/* My Courses Card */}
        <Link
          href="/student/my-courses"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider group-hover:text-[#4F46E5] transition-colors">
              My Courses
            </h3>
            <p className="mt-4 text-base font-semibold text-gray-900">
              Continue where you left off
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center w-full py-3 bg-[#4F46E5]/5 text-[#4F46E5] text-sm font-bold rounded-lg group-hover:bg-[#4F46E5] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#4F46E5]/20 transition-all duration-300">
            View my learning
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="divide-y divide-gray-100">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="py-5 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 hover:text-[#4F46E5] transition-colors cursor-pointer">
                    {activity.course}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Last accessed {activity.lastAccessed}
                  </p>
                </div>
                <div className="w-full sm:w-48">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">{activity.progress}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-[#4F46E5] h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${activity.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
