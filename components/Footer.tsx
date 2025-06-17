import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NavigationItem {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-[1440px] py-[48px]">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center text-2xl gap-0.5">
                <div className="relative h-[32px] w-[150px]">
                  <Image src="/brand.svg" alt="brand" fill />
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center space-x-2 md:space-x-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white font-semibold text-base transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950 rounded-sm px-1 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-[#A4A7AE] font-normal">
                © {currentYear} designed by Ogochukwu Odom. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
