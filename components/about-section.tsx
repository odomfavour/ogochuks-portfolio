'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const imageVariant = {
    hidden: { opacity: 0, x: -30 }, // Further reduced movement
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 30 }, // Further reduced movement
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section
      className="pt-16 sm:pt-20 lg:pt-[100px] pb-10 overflow-hidden" // Added overflow-hidden to main container
      id="about"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {' '}
        {/* Moved padding to this container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start">
          {/* Image Section */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate={controls}
            className="w-full max-w-sm lg:max-w-none lg:w-1/3 flex-shrink-0"
          >
            <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden">
              <Image
                src="/ogo.png"
                alt="Profile Picture"
                fill
                className="object-top object-cover shadow-lg"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate={controls}
            className="w-full lg:w-2/3 flex items-center"
          >
            <div className="w-full">
              <p className="text-sm sm:text-base font-semibold text-[#C0D5FF] mb-3">
                About Me
              </p>

              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold mb-6 lg:mb-8 leading-tight lg:leading-[48px]">
                Passionate About Creating Seamless User Experiences
              </h3>

              <p className="font-normal text-base sm:text-lg lg:text-xl text-[#CACFD8] leading-relaxed lg:leading-[30px]">
                Frontend Engineer with a proven track record of translating
                complex designs into high-performance web applications. I
                specialize in React ecosystem, TypeScript, and modern CSS
                frameworks, with experience leading teams and mentoring
                developers across Nigeria&apos;s tech landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
