'use client';

import { useParams, useRouter } from 'next/navigation';
import { useStudentCourses } from '../../layout';
import Link from 'next/link';
import { useRef } from 'react';

export default function StudentCourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { enrolledCourses } = useStudentCourses();
  const materialsRef = useRef<HTMLDivElement>(null);
  
  const courseId = parseInt(params.id as string);
  const course = enrolledCourses.find(c => c.id === courseId);

  const handleStartLearning = () => {
    materialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Course not found</h2>
        <p className="text-gray-500 mb-6">You might not be enrolled in this course yet.</p>
        <Link 
          href="/student/my-courses"
          className="px-6 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338ca] transition-colors"
        >
          Back to My Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="flex items-center text-sm font-medium text-gray-500 hover:text-[#4F46E5] transition-colors group"
      >
        <svg className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Course Header Section */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{course.title}</h1>
              <p className="text-gray-500 font-medium">Instructor: {course.instructor}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${
                  course.level === 'Beginner' ? 'bg-green-400' : 
                  course.level === 'Intermediate' ? 'bg-blue-400' : 'bg-purple-400'
                }`} />
                {course.level}
              </span>
              <span>•</span>
              <span>{course.duration}</span>
              <span>•</span>
              <span>{course.lessons} Lessons</span>
            </div>
          </div>
          
          <div className="w-full md:w-72 flex flex-col items-end gap-4">
            <button 
              onClick={handleStartLearning}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group/cta"
            >
              {course.progress === 0 ? "Start Course" : course.progress === 100 ? "Review Course" : "Continue Learning"}
              <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-gray-700 uppercase tracking-wider text-[11px]">Course Progress</span>
                <span className="text-[#4F46E5]">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignments Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Assignments
        </h2>
        
        {course.assignments && course.assignments.length > 0 ? (
          <div className="grid gap-4">
            {course.assignments.map((assignment) => (
              <div key={assignment.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#4F46E5]/30 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-gray-900">{assignment.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      assignment.status === 'Graded' ? 'bg-green-100 text-green-700' :
                      assignment.status === 'Submitted' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{assignment.description}</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                
                {assignment.status === 'Pending' && (
                  <button className="flex-shrink-0 px-6 py-2.5 bg-[#4F46E5] text-white text-xs font-bold rounded-lg hover:bg-[#4338ca] transition-colors shadow-sm active:scale-95">
                    Submit Assignment
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl border border-dashed border-gray-200 text-center">
            <p className="text-sm text-gray-500">No assignments posted yet.</p>
          </div>
        )}
      </section>

      {/* Study Materials Section */}
      <section ref={materialsRef} className="space-y-4 scroll-mt-8">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Study Materials
        </h2>

        {course.materials && course.materials.length > 0 ? (
          <div className="grid gap-3">
            {course.materials.map((material) => (
              <div key={material.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-[#4F46E5]/30 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#4F46E5] group-hover:bg-[#4F46E5]/5 transition-colors">
                    {material.type === 'PDF' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    ) : material.type === 'Video' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.103-1.103" />
                      </svg>
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-gray-900">{material.title}</h3>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[9px] font-bold rounded uppercase tracking-wider">
                      {material.type}
                    </span>
                  </div>
                </div>
                
                <button className="p-2 text-gray-400 hover:text-[#4F46E5] hover:bg-[#4F46E5]/5 rounded-lg transition-all">
                  {material.type === 'Video' || material.type === 'Link' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl border border-dashed border-gray-200 text-center">
            <p className="text-sm text-gray-500">No study materials available yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
