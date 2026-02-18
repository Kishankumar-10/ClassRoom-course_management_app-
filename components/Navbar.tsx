'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Navbar() {
  const links = useMemo(
    () => [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'features', label: 'Features', href: '#features' },
      { id: 'educators', label: 'Educators', href: '#educators' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        const id = (visible?.target as HTMLElement | undefined)?.id;
        if (id) setActiveId(id);
      },
      {
        // Bias toward the section heading area (accounting for sticky navbar)
        root: null,
        rootMargin: '-96px 0px -55% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
      }
    );

    sections.forEach((s) => observer.observe(s));

    // Initialize active state on first paint / hash navigation
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (hash && links.some((l) => l.id === hash)) setActiveId(hash);

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#111827]">
              Classroom
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => {
              const isActive = activeId === l.id;
              return (
                <Link
                  key={l.id}
                  href={l.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'text-sm font-medium transition-colors',
                    isActive ? 'text-[#4F46E5]' : 'text-[#6B7280] hover:text-[#111827]',
                  ].join(' ')}
                >
                  <span className="relative">
                    {l.label}
                    <span
                      className={[
                        'absolute -bottom-2 left-0 h-[2px] w-full rounded-full transition-opacity',
                        'bg-[#4F46E5]',
                        isActive ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                    />
                  </span>
                </Link>
              );
            })}
            <Link 
              href="/login" 
              className="text-sm font-medium text-[#4F46E5] hover:text-[#4338ca] transition-colors"
            >
              Login
            </Link>
          </div>
          
          {/* Mobile menu button placeholder (hidden for desktop-first) */}
          <div className="md:hidden flex items-center">
             <button className="text-[#6B7280] hover:text-[#111827]">
               <span className="sr-only">Open menu</span>
               {/* Simple hamburger icon */}
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
