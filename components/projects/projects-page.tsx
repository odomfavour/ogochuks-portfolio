'use client';

import ProjectCard from './project-card';

const projects = [
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  {
    title: 'KompleteKare Healthcare Platform',
    description: 'Healthcare management platform with seamless user experience',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/kitchendiary.png',
    demoLink: '#',
  },
  // Add more projects here...
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#0f0f1c] text-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-20">
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

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
