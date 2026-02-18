'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827]">
      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-[80vh] py-20 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="mb-12 lg:mb-0 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.05] mb-6">
                Build Better Courses, Deliver Better Learning.
              </h1>
              <p className="text-lg sm:text-xl text-[#6B7280] mb-10 max-w-xl leading-relaxed">
              Education works best when structure meets clarity. Classroom empowers instructors to build meaningful learning experiences while giving students the transparency they need to succeed. By unifying course creation, assignments, materials, and progress tracking into one platform, it transforms scattered workflows into a cohesive system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link 
                  href="/signup" 
                  className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#4F46E5] hover:bg-[#4338ca] transition-colors shadow-sm"
                >
                  Get Started
                </Link>
                <Link 
                  href="/login" 
                  className="inline-flex justify-center items-center px-8 py-3.5 border border-[#E5E7EB] text-base font-medium rounded-lg text-[#4F46E5] bg-white hover:bg-gray-50 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Right Column: Classroom Image */}
            <div className="relative mx-auto w-full max-w-[550px] lg:max-w-[600px]">
              <div className="relative rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/classroom-image.jpg"
                  alt="Classroom learning environment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section id="features" className="py-20 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827]">
              Platform Features
            </h2>
            <p className="mt-4 text-base text-[#6B7280] leading-relaxed mx-auto">
              A unified platform that brings course creation, student management, assignments, and learning resources together in one seamless workspace.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-6 text-[#4F46E5] border border-[#E5E7EB]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-3">Course Creation & Management</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Create structured curriculums, upload materials, and organize content efficiently.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-6 text-[#4F46E5] border border-[#E5E7EB]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-3">Student Enrollment & Tracking</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Allow students to enroll and monitor their learning progress in real time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-6 text-[#4F46E5] border border-[#E5E7EB]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-3">Assignment Distribution</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Post assignments with deadlines and manage submissions seamlessly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-6 text-[#4F46E5] border border-[#E5E7EB]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-3">Centralized Learning Hub</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Keep all learning materials, updates, and communication in one secure space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCATORS SECTION */}
      <section id="educators" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-xl shadow-lg overflow-hidden max-w-[550px] mx-auto">
                <Image
                   src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                   alt="Educator using Classroom platform"
                   width={550}
                   height={400}
                   unoptimized
                   className="w-full h-auto object-cover aspect-[4/3]"
                 />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="order-1 md:order-2 text-left">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] mb-6">
                Built for Educators
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 max-w-lg leading-relaxed">
                Take full control of your virtual classroom. Our platform is designed to give instructors the clarity and tools they need to manage courses without the technical overhead.
              </p>
              
              <ul className="space-y-4 text-left">
                {[
                  'Organized course dashboards',
                  'Assignment & deadline management',
                  'Student performance tracking',
                  'Centralized materials management'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#374151]">
                    <svg className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST SIGNALS */}
      <section className="py-20 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-[#6B7280]">
            Built for students and educators • Secure and reliable learning platform
          </p>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827]">
              Set up in minutes, scale all semester
            </h2>
            <p className="mt-4 text-lg text-[#6B7280] leading-relaxed">
              A simple flow for instructors and students—clear steps, fewer clicks, more learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-[#E5E7EB] bg-gray-50 flex items-center justify-center text-[#4F46E5]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#111827]">Step 1</p>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Create your course</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Add modules, upload materials, and structure content so students always know what’s next.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-[#E5E7EB] bg-gray-50 flex items-center justify-center text-[#4F46E5]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#111827]">Step 2</p>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Invite students</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Enroll learners quickly and keep communication centralized for announcements and updates.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-[#E5E7EB] bg-gray-50 flex items-center justify-center text-[#4F46E5]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#111827]">Step 3</p>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Track progress</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                See engagement at a glance, review submissions, and support students with timely feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed text-center">
              Students can rely on us for structured academic support, streamlined coursework management, and prompt resolution of any technical concerns—ensuring a more organized and productive learning experience.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@school.edu"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF] resize-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#4F46E5] text-white font-medium rounded-lg hover:bg-[#4338ca] transition-all shadow-sm flex items-center justify-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-10 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} Classroom. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#features" className="text-[#6B7280] hover:text-[#111827] transition-colors">
                Features
              </a>
              <a href="#contact" className="text-[#6B7280] hover:text-[#111827] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
