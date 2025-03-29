'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useSession } from 'next-auth/react';


export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const isActive = (path: string) => {
    return pathname === path ? 'text-accent border-b-2 border-accent' : 'text-gray-600 hover:text-accent';
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="bg-[#1a365d] rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">FS</span>
              </div>
              <div className="sm:block">
                <span className="text-xl font-bold text-[#1a365d]">Faijan</span>
                <span className="text-xl font-bold text-[#4299e1]">Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isActive(item.href)} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            {session ? (
              <Link
                href="/dashboard"
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isActive(item.href)} block px-3 py-2 text-base font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!session && (
              <Link
                href="/auth/login"
                className={`${isActive('/auth/login')} block px-3 py-2 text-base font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
            {session && (
              <Link
                href="/dashboard"
                className={`${isActive('/dashboard')} block px-3 py-2 text-base font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 