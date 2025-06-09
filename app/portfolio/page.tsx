import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsSection from '@/components/projects/projects-page';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default page;
