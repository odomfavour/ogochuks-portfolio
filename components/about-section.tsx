'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Animate out when it leaves the screen
    }
  }, [isInView, controls]);

  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <div className="pt-[100px] pb-10" id="about" ref={ref}>
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-14">
            <motion.div
              variants={imageVariant}
              initial="hidden"
              animate={controls}
              className="lg:w-1/3 w-full"
            >
              <div className="w-full h-[400px] relative">
                <Image
                  src="/ogo.png"
                  alt="Profile Picture"
                  fill
                  className="object-top object-cover shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              variants={textVariant}
              initial="hidden"
              animate={controls}
              className="lg:w-2/3 w-full flex items-center"
            >
              <div>
                <p className="text-base font-semibold text-[#C0D5FF] mb-3">
                  About Me
                </p>
                <h3 className="text-white text-[40px] font-bold mb-8 leading-[48px]">
                  Passionate About Creating Seamless User Experiences
                </h3>
                <h6 className="font-normal text-[20px] text-[#CACFD8] leading-[30px]">
                  Frontend Engineer with a proven track record of translating
                  complex designs into high-performance web applications. I
                  specialize in React ecosystem, TypeScript, and modern CSS
                  frameworks, with experience leading teams and mentoring
                  developers across Nigeria&apos;s tech landscape.
                </h6>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
