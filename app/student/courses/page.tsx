'use client';

import Image from "next/image";
import { useStudentCourses } from "../layout";
import { courses } from "@/app/data/courses";
import { useState } from "react";

export default function StudentCoursesPage() {
  const { enrolledCourses, enrollCourse } = useStudentCourses();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Available Courses
        </h1>
        <p className="text-sm text-gray-500">
          Explore our catalog and find the perfect course for you.
        </p>
      </div>

      {/* Utility Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]">
            <option>All Categories</option>
            <option>Development</option>
            <option>Design</option>
            <option>Business</option>
          </select>
          <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]">
            <option>Sort by: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const isEnrolled = enrolledCourses.some((item) => item.id === course.id);

          // Helper for level badge colors
          const getLevelBadge = (level: string) => {
            switch (level) {
              case 'Beginner':
                return 'bg-green-50 text-green-600 border-green-100';
              case 'Intermediate':
                return 'bg-blue-50 text-blue-600 border-blue-100';
              case 'Advanced':
                return 'bg-purple-50 text-purple-600 border-purple-100';
              default:
                return 'bg-gray-50 text-gray-600 border-gray-100';
            }
          };

          return (
            <div
              key={course.id}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 flex flex-col"
            >
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] rounded-lg shadow-sm border border-white/20">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* 1. Title */}
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-[#4F46E5] transition-colors mb-2">
                  {course.title}
                </h3>

                {/* 2. Level Badge */}
                <div className="mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getLevelBadge(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                {/* 3. Rating */}
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-[#FBBF24]' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">{course.rating}</span>
                  <span className="text-sm text-[#6B7280]">({course.reviews.toLocaleString()} reviews)</span>
                </div>

                {/* 4. Students Enrolled */}
                <div className="text-sm text-[#6B7280] mb-4">
                  {course.students.toLocaleString()} students enrolled
                </div>

                {/* 5. Short Description */}
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* 6. Level • Duration • Lessons */}
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4 pb-4 border-b border-gray-50">
                  <span>{course.level}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{course.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{course.lessons} Lessons</span>
                </div>

                {/* 7. Instructor */}
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 border border-white shadow-sm">
                    {course.instructor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">Instructor</span>
                    <span className="text-xs font-bold text-gray-700">{course.instructor}</span>
                  </div>
                </div>

                {/* 8. Enroll Button */}
                <button
                  onClick={() => enrollCourse(course)}
                  disabled={isEnrolled}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 ${
                    isEnrolled
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                      : "bg-[#4F46E5] text-white hover:bg-[#4338ca] shadow-[0_4px_12px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] active:scale-[0.97]"
                  }`}
                >
                  {isEnrolled ? "Already Enrolled" : "Enroll Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
