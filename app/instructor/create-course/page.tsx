'use client';

export default function InstructorCreateCoursePage() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Create New Course</h1>
          <p className="mt-1 text-gray-500">Fill in the details below to set up your new course.</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
          <form className="p-8 space-y-10" onSubmit={(e) => e.preventDefault()}>
            
            {/* Basic Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Basic Information</h2>
                <div className="h-px bg-gray-100 flex-1"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Course Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    placeholder="e.g. Advanced Web Development"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    placeholder="Provide a comprehensive description of what students will learn..."
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 resize-none shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Course Details Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Course Details</h2>
                <div className="h-px bg-gray-100 flex-1"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm cursor-pointer"
                  >
                    <option value="">Select a category</option>
                    <option value="development">Development</option>
                    <option value="business">Business</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="health-fitness">Health & Fitness</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Difficulty Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="level"
                    name="level"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm cursor-pointer"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Media Upload</h2>
                <div className="h-px bg-gray-100 flex-1"></div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Course Thumbnail <span className="text-gray-400 font-normal">(Recommended: 1280x720px)</span>
                </label>
                <div className="relative group">
                  <div className="mt-1 flex flex-col items-center justify-center px-6 pt-10 pb-10 border-2 border-gray-300 border-dashed rounded-xl hover:border-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-indigo-100 transition-colors mb-4">
                      <svg className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button Section */}
            <div className="pt-8 border-t border-gray-100">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span>Publish Course</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <p className="mt-4 text-center text-xs text-gray-500">
                By publishing, you agree to our Instructor Terms and Quality Guidelines.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
