'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiJavascript } from 'react-icons/si';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

const SkillsAndTools: React.FC = () => {
  const skills = [
    { icon: <FaReact className="h-6 w-6" />, title: 'ReactJS' },
    { icon: <FaVuejs className="h-6 w-6" />, title: 'VueJs' },
    { icon: <FaNodeJs className="h-6 w-6" />, title: 'NodeJs' },
    { icon: <FaGithub className="h-6 w-6" />, title: 'Github' },
    { icon: <SiJavascript className="h-6 w-6" />, title: 'Javascript' },
    { icon: <SiNuxtdotjs className="h-6 w-6" />, title: 'NuxtJs' },
    { icon: <SiNextdotjs className="h-6 w-6" />, title: 'NextJs' },
  ];

  return (
    <section className="py-[50px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="w-11/12 mx-auto">
          <div className="grid gap-12 flex-col-reverse lg:grid-cols-2 lg:gap-20">
            {/* Skills Grid */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    icon={skill.icon}
                    title={skill.title}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Tools Description */}
            <div>
              <p className="text-sm font-medium capitalize tracking-wider text-[#C0D5FF] mb-3">
                Skills & Tools
              </p>
              <h2 className="text-[40px] font-bold text-white mb-3">Tools</h2>
              <p className="text-base leading-relaxed font-normal text-[#CACFD8]">
                Transforming innovative designs into compelling web applications
                with 3+ years of expertise in React, Next.js, and modern
                frontend technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
