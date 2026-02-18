'use client';

import Link from 'next/link';
import { courses } from '@/app/data/courses';

export default function InstructorDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Instructor Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Welcome back, Instructor! Manage your courses and track your impact.
        </p>
      </div>

      {/* Stats and CTA Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Created Courses Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Total Created Courses
          </h3>
          <p className="mt-1 text-3xl font-bold text-gray-900">{courses.length}</p>
          <p className="mt-1 text-sm text-gray-500">
            Active and published courses
          </p>
        </div>

        {/* Total Students Enrolled Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Total Students Enrolled
          </h3>
          <p className="mt-1 text-3xl font-bold text-gray-900">1,284</p>
          <p className="mt-1 text-sm text-gray-500">
            Across all your courses
          </p>
        </div>

        {/* Pending Assignments Review Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
          </div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Pending Reviews
          </h3>
          <p className="mt-1 text-3xl font-bold text-gray-900">12</p>
          <p className="mt-1 text-sm text-gray-500">
            Assignments needing feedback
          </p>
        </div>

        {/* Create New Course CTA Card */}
        <Link 
          href="/instructor/create-course"
          className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-indigo-600 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-600 transition-colors">
              <svg className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <h3 className="text-xs font-semibold text-gray-500 group-hover:text-indigo-600 uppercase tracking-wide transition-colors">
            Create New Course
          </h3>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            Build a new learning experience
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-indigo-600">
            Start building
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>

        {/* Manage Courses CTA Card */}
        <Link 
          href="/instructor/courses"
          className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-indigo-600 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-600 transition-colors">
              <svg className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <h3 className="text-xs font-semibold text-gray-500 group-hover:text-indigo-600 uppercase tracking-wide transition-colors">
            Manage Courses
          </h3>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            Review and update your content
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-indigo-600">
            View my courses
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-4 flex items-center hover:bg-gray-50 transition-colors">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mr-4"></div>
            <p className="text-sm text-gray-600">New student enrolled in <span className="font-medium text-gray-900">AI & ML</span></p>
            <span className="ml-auto text-xs text-gray-400">2 hours ago</span>
          </div>
          <div className="px-6 py-4 flex items-center hover:bg-gray-50 transition-colors">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mr-4"></div>
            <p className="text-sm text-gray-600">Assignment submitted in <span className="font-medium text-gray-900">Android Development</span></p>
            <span className="ml-auto text-xs text-gray-400">5 hours ago</span>
          </div>
          <div className="px-6 py-4 flex items-center hover:bg-gray-50 transition-colors">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mr-4"></div>
            <p className="text-sm text-gray-600">Course <span className="font-medium text-gray-900">Cloud Computing</span> updated</p>
            <span className="ml-auto text-xs text-gray-400">Yesterday</span>
          </div>
        </div>
      </div>
    </div>
  );
}
