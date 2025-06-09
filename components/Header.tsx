'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaHamburger, FaFirstOrderAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link as ScrollLink } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from '@/utils/data';
import MobileNav from './MobileNav';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className="w-full  top-0 z-40 left-0 fixed bg-[#0E121B] flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)] font-jost">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-5 ">
          <Link href="/" className="flex items-center text-2xl gap-0.5">
            <div className="relative h-[32px] w-[150px]">
              <Image src="/brand.svg" alt="brand" fill />
            </div>
          </Link>
          <ul className="md:flex items-center text-white gap-12 hidden">
            {navLinks.map((itemLink) => (
              <li key={itemLink.id}>
                <Link
                  href={itemLink.url}
                  className={`text-lg font-medium pb-2 ${
                    pathname === itemLink.url ? 'border-b border-[#C0D5FF]' : ''
                  }`}
                >
                  {itemLink.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:flex gap-4 hidden">
            <Link
              href="#projects"
              className="inline-block bg-[#335CFF] hover:bg-[#335CFF] text-white p-[10px] rounded-[10px] transition text-sm"
            >
              Download Resume
            </Link>
            {/* <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              activeClass="font-bold text-[#F37B23]"
              className="bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f37a23da]  duration-300"
            >
              Hire Me
            </ScrollLink> */}
          </div>
          <div className="hamburger cursor-pointer md:hidden block">
            <GiHamburgerMenu
              role="button"
              className="text-[#F37B23] text-3xl"
              onClick={() => setOpenMobile(true)}
            />
          </div>
        </div>
      </div>
      {openMobile && <MobileNav handleClose={() => setOpenMobile(false)} />}
    </div>
  );
};

export default Header;
