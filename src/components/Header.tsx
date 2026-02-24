"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10 sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-purple-400 bg-purple-500/20' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
              }`}
            >
              About
            </Link>
            <Link 
              href="/skills" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/skills') 
                  ? 'text-purple-400 bg-purple-500/20' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/projects') 
                  ? 'text-purple-400 bg-purple-500/20' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`ml-6 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/50'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-xl hover:shadow-pink-500/50'
              }`}
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-400 hover:text-purple-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-2 animate-fade-in-down">
            <Link
              href="/about"
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-purple-400 bg-purple-500/20'
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/skills"
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/skills')
                  ? 'text-purple-400 bg-purple-500/20'
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/projects')
                  ? 'text-purple-400 bg-purple-500/20'
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/50'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
