'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row ${
        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
      } items-center gap-12`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-[400px] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className="bg-gray-800 text-sm text-white px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-md font-medium"
        >
          View Live Demo
        </a>
      </div>
    </motion.div>
  );
}
