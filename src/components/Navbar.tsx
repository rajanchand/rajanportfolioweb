
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'meeting', label: 'Meeting' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Find which section is currently in view
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, top: 0, bottom: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id: item.id,
          top: rect.top + scrollPosition,
          bottom: rect.bottom + scrollPosition
        };
      });
      
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollPosition + viewportHeight / 3;
      
      for (const section of sections) {
        if (viewportCenter >= section.top && viewportCenter <= section.bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-lg shadow-sm' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight"
          onClick={() => handleNavClick('home')}
        >
          Rajan Chand
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar-item ${activeSection === item.id ? 'active-navbar-item' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            className="ml-4 p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md ${
                  activeSection === item.id ? 'bg-secondary' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
