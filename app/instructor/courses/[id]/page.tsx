'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { courses } from '@/app/data/courses';

interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface Material {
  id: number;
  title: string;
  url: string;
}

export default function InstructorCourseDetailPage() {
  const params = useParams();
  const courseId = parseInt(params.id as string);
  const course = courses.find((c) => c.id === courseId);

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  
  const [showAssignmentForm, setShowAssignmentForm] = useState(false);
  const [showMaterialForm, setShowMaterialForm] = useState(false);

  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });
  const [newMaterial, setNewMaterial] = useState({ title: '', url: '' });

  if (!course) {
    return <div className="p-8 text-center">Course not found</div>;
  }

  const handleAddAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAssignment.title || !newAssignment.description || !newAssignment.dueDate) return;
    
    setAssignments([...assignments, { ...newAssignment, id: Date.now() }]);
    setNewAssignment({ title: '', description: '', dueDate: '' });
    setShowAssignmentForm(false);
  };

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMaterial.title || !newMaterial.url) return;

    setMaterials([...materials, { ...newMaterial, id: Date.now() }]);
    setNewMaterial({ title: '', url: '' });
    setShowMaterialForm(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Course Header */}
        <div className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden mb-8">
          <div className="relative h-64 w-full bg-gray-100">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#111827] mb-4">{course.title}</h1>
            <p className="text-[#6B7280] text-lg">{course.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Assignments Section */}
          <section className="bg-white p-8 rounded-lg border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#111827]">Assignments</h2>
              <button
                onClick={() => setShowAssignmentForm(!showAssignmentForm)}
                className="bg-[#4F46E5] text-white py-2 px-4 rounded-md font-medium hover:bg-[#4338ca] transition-colors"
              >
                {showAssignmentForm ? 'Cancel' : 'Add Assignment'}
              </button>
            </div>

            {showAssignmentForm && (
              <form onSubmit={handleAddAssignment} className="mb-8 p-6 bg-gray-50 rounded-lg border border-[#E5E7EB]">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">Title</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">Description</label>
                    <textarea
                      required
                      className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
                      rows={3}
                      value={newAssignment.description}
                      onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">Due Date</label>
                    <input
                      type="date"
                      required
                      className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
                      value={newAssignment.dueDate}
                      onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4F46E5] text-white py-2 px-4 rounded-md font-medium hover:bg-[#4338ca]"
                  >
                    Post Assignment
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {assignments.length === 0 ? (
                <p className="text-[#6B7280] italic">No assignments posted yet.</p>
              ) : (
                assignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 border border-[#E5E7EB] rounded-lg">
                    <h3 className="font-bold text-[#111827]">{assignment.title}</h3>
                    <p className="text-[#6B7280] text-sm mt-1">{assignment.description}</p>
                    <p className="text-xs font-medium text-[#4F46E5] mt-2">Due: {assignment.dueDate}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Materials Section */}
          <section className="bg-white p-8 rounded-lg border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#111827]">Materials</h2>
              <button
                onClick={() => setShowMaterialForm(!showMaterialForm)}
                className="bg-[#4F46E5] text-white py-2 px-4 rounded-md font-medium hover:bg-[#4338ca] transition-colors"
              >
                {showMaterialForm ? 'Cancel' : 'Add Material'}
              </button>
            </div>

            {showMaterialForm && (
              <form onSubmit={handleAddMaterial} className="mb-8 p-6 bg-gray-50 rounded-lg border border-[#E5E7EB]">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">Title</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
                      value={newMaterial.title}
                      onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">URL</label>
                    <input
                      type="url"
                      required
                      placeholder="https://"
                      className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
                      value={newMaterial.url}
                      onChange={(e) => setNewMaterial({ ...newMaterial, url: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4F46E5] text-white py-2 px-4 rounded-md font-medium hover:bg-[#4338ca]"
                  >
                    Add Material
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {materials.length === 0 ? (
                <p className="text-[#6B7280] italic">No materials added yet.</p>
              ) : (
                materials.map((material) => (
                  <div key={material.id} className="flex items-center justify-between p-4 border border-[#E5E7EB] rounded-lg">
                    <div>
                      <h3 className="font-bold text-[#111827]">{material.title}</h3>
                      <a href={material.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#4F46E5] hover:underline">
                        {material.url}
                      </a>
                    </div>
                    <svg className="w-5 h-5 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
