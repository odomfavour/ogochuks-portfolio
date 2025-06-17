'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <div className="">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0E121B] ${
          isScrolled
            ? 'bg-[#0E121B] backdrop-blur-md shadow-lg border-b border-white/10'
            : ' border-b border-white/5'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto">
            <div className="flex items-center justify-between py-[18px]">
              {/* Logo */}
              <Link href="/" className="flex items-center text-2xl gap-0.5">
                <div className="relative h-[32px] w-[150px]">
                  <Image src="/brand.svg" alt="brand" fill />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-300 hover:text-white transition-all duration-200 relative group py-2 ${
                      pathname === link.href
                        ? 'font-semibold text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Download Button */}
              <div className="hidden md:block">
                <Link
                  href="/projects/ogochukwu--odoms-cv.pdf"
                  download
                  className="inline-block bg-[#335CFF] hover:bg-[#335CFF] text-white p-[10px] rounded-[10px] transition text-sm"
                >
                  Download Resume
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white hover:text-gray-300 transition-colors duration-200 p-2"
              >
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 space-y-2 border-t border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      pathname === link.href
                        ? 'text-white bg-white/10 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="/projects/ogochukwu--odoms-cv.pdf"
                    download
                    className="inline-block bg-[#335CFF] hover:bg-[#335CFF] text-white p-[10px] rounded-[10px] transition text-sm"
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
