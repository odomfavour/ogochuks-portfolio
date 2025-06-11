// components/FeaturedProjects.tsx

'use client';

import {
  featuredProjects,
  featuredProjects0,
  featuredProjects1,
  featuredProjects11,
  featuredProjects12,
  featuredProjects2,
} from '@/utils/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// const projects = [
//   {
//     title: 'Kitchen Diary',
//     description:
//       'A website where users can create their recipe and print them in a beautiful A4 paper',
//     tech: ['ReactJS', 'Tailwind', 'Typescript', 'CSS'],
//     image: '/projects/kitchendiary.png',
//     liveLink: '#',
//     codeLink: '#',
//     size: 'col-span-1 row-span-2',
//   },
//   {
//     title: 'Car Showcase',
//     description: 'Interactive web wireframe design for prototyping.',
//     tech: ['HTML', 'CSS', 'UX'],
//     image: '/projects/car-showcase.png',
//     liveLink: '#',
//     codeLink: '#',
//     size: 'col-span-1 row-span-1',
//   },
//   {
//     title: 'Delta7',
//     description: 'Freelance workspace dashboard design.',
//     tech: ['VueJS', 'Firebase'],
//     image: '/projects/delta7.png',
//     liveLink: '#',
//     codeLink: '#',
//     size: 'col-span-1 row-span-2',
//   },
//   {
//     title: 'MC Holly',
//     description: 'Construction planning dashboard with 3D views.',
//     tech: ['React', 'Three.js'],
//     image: '/projects/mc-holly.png',
//     liveLink: '#',
//     codeLink: '#',
//     size: 'col-span-1 row-span-2',
//   },
//   {
//     title: 'Weather',
//     description: 'A minimalist blog reading app.',
//     tech: ['Next.js', 'Tailwind'],
//     image: '/projects/weather.png',
//     liveLink: '#',
//     codeLink: '#',
//     size: 'col-span-1',
//   },
//   {
//     title: 'Fhenix',
//     description: 'A minimalist blog reading app.',
//     tech: ['Next.js', 'Tailwind'],
//     image: '/projects/fhenix.png',
//     liveLink: '#',
//     codeLink: '#',
//     size: 'col-span-1',
//   },
// ];

export default function FeaturedProjects() {
  const projectSets = [
    featuredProjects,
    featuredProjects11,
    featuredProjects12,
  ];
  const mobileProjectSets = [
    featuredProjects0,
    featuredProjects1,
    featuredProjects2,
    featuredProjects11.slice(0, 2),
    featuredProjects12.slice(0, 2),
    featuredProjects11.slice(2, 4),
    featuredProjects12.slice(2, 4),
  ];

  return (
    <section className="py-8 px-6 md:px-20" id="portfolio">
      <div className="text-center mb-12">
        <p className="text-base font-semibold uppercase text-[#F2F2FF] mb-3">
          My Portfolio
        </p>
        <h2 className="mb:text-[40px] text-[30px] font-bold text-white">
          Featured Projects
        </h2>
        <p className="mt-3 text-lg text-[#E1E4EA]">
          A showcase of my recent work and technical expertise
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/portfolio"
            className="bg-primary hover:bg-blue-700 text-sm text-white p-[10px] rounded-[10px] cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="border border-white p-[10px] text-sm rounded-[10px] hover:bg-white text-white hover:text-black transition cursor-pointer"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>

      {/* Mobile View - Single Column Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto pb-4">
        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: [0, -100 / projectSets.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {mobileProjectSets.map((projectSet, setIndex) => (
            <div
              key={setIndex}
              className="flex flex-col gap-6 flex-shrink-0 w-[85vw]"
            >
              {/* Split projects into pairs for 2-column layout */}
              {Array.from({ length: Math.ceil(projectSet.length / 2) }).map(
                (_, pairIndex) => (
                  <div key={pairIndex} className="grid grid-cols-1 gap-4">
                    {projectSet
                      .slice(pairIndex * 2, pairIndex * 2 + 2)
                      .map((project, idx) => (
                        <motion.div
                          key={`${setIndex}-${pairIndex}-${idx}`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="relative group rounded-xl overflow-hidden shadow-md min-h-[200px]"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute bottom-0 left-0 w-full bg-[#00000066] backdrop-blur-md border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end space-y-2 text-white">
                            <div>
                              <h3 className="text-white text-sm font-semibold line-clamp-1">
                                {project.title}
                              </h3>
                              <p className="text-xs line-clamp-2">
                                {project.description}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-1 text-[10px]">
                              {project.tech.slice(0, 2).map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-white bg-gray-700 px-1.5 py-0.5 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.tech.length > 2 && (
                                <span className="text-white bg-gray-700 px-1.5 py-0.5 rounded-full">
                                  +{project.tech.length - 2}
                                </span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 rounded-[8px] text-xs"
                              >
                                Live
                              </a>
                              <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white hover:bg-white hover:text-black px-2 py-0.5 rounded-[8px] text-xs"
                              >
                                Code
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                )
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="hidden md:block overflow-x-auto">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -100 / projectSets.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {projectSets.map((projectSet, setIndex) => (
            <div
              key={setIndex}
              className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:auto-rows-auto gap-6 flex-shrink-0 w-[300px] sm:w-[600px] md:w-[900px] lg:w-[1200px]"
            >
              {projectSet.map((project, idx) => (
                <motion.div
                  key={`${setIndex}-${idx}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group rounded-xl overflow-hidden shadow-md ${project.size} min-h-[200px] sm:min-h-[250px] md:min-h-[300px]`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#00000066] backdrop-blur-md border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end space-y-3 text-white">
                    <div>
                      <h3 className="text-white text-lg sm:text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-white bg-gray-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-[10px] text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white hover:bg-white hover:text-black px-3 py-1 rounded-[10px] text-sm"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
