'use client';

import { projects } from '@/utils/data';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <section className="bg-[#0f0f1c] text-white pt-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto mb-20 text-center">
          <p className="text-indigo-400 text-sm font-semibold uppercase mb-2">
            Explore Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
