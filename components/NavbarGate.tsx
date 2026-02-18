'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarGate() {
  const pathname = usePathname();
  if (
    pathname.startsWith('/student') ||
    pathname.startsWith('/instructor') ||
    pathname === '/login' ||
    pathname === '/signup'
  ) {
    return null;
  }
  return <Navbar />;
}
