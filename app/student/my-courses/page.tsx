'use client';

import Image from "next/image";
import Link from "next/link";
import { useStudentCourses } from "../layout";

export default function StudentMyCoursesPage() {
  const { enrolledCourses } = useStudentCourses();

  return (
    <div className="space-y-8 flex flex-col h-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
          My Courses
        </h1>
        <p className="text-sm text-gray-500">
          Your enrolled courses and learning progress.
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <Link
              key={course.id}
              href={`/student/my-courses/${course.id}`}
              className="block group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#4F46E5]/5 transition-all duration-300 p-5"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Thumbnail */}
                <div className="relative h-32 w-full md:w-52 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 208px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Middle: Content */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                        course.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        course.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {course.status}
                      </span>
                      <span className="text-gray-300 text-xs">•</span>
                      <p className="text-xs font-medium text-gray-500">Instructor: {course.instructor}</p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 truncate group-hover:text-[#4F46E5] transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  
                  <div className="w-full max-w-md">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">Course Progress</span>
                      </div>
                      <span className="text-sm font-bold text-[#4F46E5]">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Action */}
                <div className="flex-shrink-0 w-full md:w-auto">
                  <div className="w-full md:w-auto px-10 py-3.5 bg-[#4F46E5] text-white text-sm font-bold rounded-xl hover:bg-[#4338ca] shadow-[0_4px_12px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 active:scale-[0.97] flex items-center justify-center gap-2 group/btn">
                    {course.progress === 100 ? "View Certificate" : course.progress > 0 ? "Resume Course" : "Start Course"}
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
          <div className="w-24 h-24 bg-[#4F46E5]/5 rounded-full flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 bg-[#4F46E5]/10 rounded-full animate-ping opacity-20" />
            <svg className="w-10 h-10 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No courses yet</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-xs text-center leading-relaxed">
            Your learning journey is waiting. Explore our catalog and enroll today!
          </p>
          <Link
            href="/student/courses"
            className="inline-flex items-center px-6 py-3 bg-[#4F46E5] text-white text-sm font-bold rounded-xl hover:bg-[#4338ca] shadow-lg shadow-[#4F46E5]/20 transition-all duration-300 active:scale-[0.97] group"
          >
            Browse Catalog
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
