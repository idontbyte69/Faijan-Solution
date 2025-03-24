'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-accent border-b-2 border-accent' : 'text-gray-600 hover:text-accent';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary"><img src="/logo.png" alt="logo" className="w-10 h-10" /></span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className={`${isActive('/')} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive('/about')} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
              About
            </Link>
            <Link href="/services" className={`${isActive('/services')} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
              Services
            </Link>
            <Link href="/blog" className={`${isActive('/blog')} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
              Vlog & Article
            </Link>
            <Link href="/contact" className={`${isActive('/contact')} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 