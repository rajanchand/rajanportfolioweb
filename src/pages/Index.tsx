
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Widget from '@/components/Widget';
import Meeting from '@/components/Meeting';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Meeting />
      <Widget />
    </Layout>
  );
};

export default Index;
