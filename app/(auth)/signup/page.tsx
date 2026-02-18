"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const role = formData.get("role");

    if (role === "instructor") {
      router.push("/instructor/dashboard");
    } else {
      router.push("/student/dashboard");
    }
  };

  return (
    <div className="w-full max-w-md md:max-w-lg font-sans">
      {/* Back Button */}
      <div className="absolute top-8 left-8">
        <Link 
          href="/" 
          className="group flex items-center text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
        >
          <span className="mr-1 group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </Link>
      </div>

      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#4F46E5]">
          Classroom
        </p>
        <h1 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827]">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-[#6B7280]">
          Start learning or teaching in just a few steps.
        </p>
      </div>

      <div className="mt-8">
        <div className="bg-white py-8 px-5 sm:px-8 shadow-sm border border-[#E5E7EB] rounded-xl">
          <form className="space-y-6" onSubmit={handleSignup} noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#111827] mb-1.5"
              >
                Email address
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-[#E5E7EB] px-3.5 py-2.5 text-sm shadow-sm focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-1 focus:ring-offset-[#F9FAFB]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#111827] mb-1.5"
              >
                Password
              </label>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border border-[#E5E7EB] px-3.5 py-2.5 text-sm shadow-sm focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-1 focus:ring-offset-[#F9FAFB]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-[#111827] mb-1.5"
              >
                I am a
              </label>
              <div>
                <select
                  id="role"
                  name="role"
                  className="block w-full rounded-md border border-[#E5E7EB] px-3.5 py-2.5 text-sm shadow-sm bg-white focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-1 focus:ring-offset-[#F9FAFB]"
                  defaultValue="student"
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#4F46E5] py-2.5 px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#4338ca] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transition-colors duration-150"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E7EB]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-xs text-[#6B7280]">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm font-medium text-[#4F46E5] hover:text-[#4338ca] hover:underline underline-offset-4"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

