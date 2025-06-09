'use client';

import Link from 'next/link';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { navLinks } from '@/utils/data';
import { FaHamburger, FaFirstOrderAlt } from 'react-icons/fa';
interface mobileNavProps {
  handleClose(): void;
}
// eslint-disable-next-line react/prop-types
const MobileNav: React.FC<mobileNavProps> = ({
  handleClose,
}: mobileNavProps) => {
  return (
    <div className="fixed z-50 top-3 w-full">
      <div className="w-11/12 mx-auto bg-white min-h-[300px] rounded-md p-5">
        <div className="flex justify-between">
          <div>
            <Link href="/" className="flex items-center text-2xl gap-0.5">
              <FaFirstOrderAlt />G<FaFirstOrderAlt />
            </Link>
          </div>
          <FaTimes
            className="text-red-500 text-xl"
            role="button"
            onClick={handleClose}
          />
        </div>
        <div className="pt-3">
          <ul className="lg:space-x-4 space-y-4 lg:space-y-0 lg:flex md:mx-auto justify-center">
            {navLinks.map((item) => {
              const { id, name, url } = item;
              return (
                <li className=" block pr-3 border-[#FF8717]" key={id}>
                  <Link href={url} className="text-lg font-medium">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
