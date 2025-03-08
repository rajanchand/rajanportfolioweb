
import React from 'react';
import Navbar from '../Navbar';
import ParticlesBackground from '../ParticlesBackground';
import Footer from '../Footer';
import AISearch from '../AISearch';
import { ThemeProvider } from '@/context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col w-full">
        <AISearch />
        <ParticlesBackground />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
