'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0E121B] text-white">
      <div className="w-11/12 mx-auto">
        {/* Text sliding from the left */}
        <div className="flex md:flex-row flex-col-reverse items-center gap-8 pt-14">
          <div className="lg:w-3/5 w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center md:text-left"
            >
              <h1 className="text-[32px] font-bold text-[#B0B3B5] mb-5">
                Hi there! I’m{' '}
                <span className="text-[#C0D5FF]">Ogochukwu Odom</span>
              </h1>
              <h3 className="text-white font-bold text-[48px] leading-[56px]">
                Frontend Engineer
                <br />
                Crafting Digital Experiences
              </h3>
              <p className="text-lg text-[#E1E4EA] mb-8 leading-[24px">
                Transforming innovative designs into compelling web applications
                with 3+ years of
                <br /> expertise in React, Next.js, and modern frontend
                technologies.
              </p>

              <div className="flex gap-x-5">
                <Link
                  href="#projects"
                  className="inline-block bg-[#335CFF] hover:bg-[#335CFF] text-white p-[10px] rounded-[10px] transition text-sm"
                >
                  View My Work
                </Link>
                <Link
                  href="#projects"
                  className="inline-block border-[#E1E4EA] border text-white p-[10px] rounded-[10px] transition text-sm"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-2/5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-[640px] relative"
            >
              <Image
                src="/ogo.png" // Replace with your image path
                alt="Profile Picture"
                fill
                className=" object-top object-cover shadow-lg  rounded-tl-[150px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Image sliding from the bottom */}
      </div>
    </section>
  );
}
