
import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, MessageCircle, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <div className={`mb-8 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/10 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Rajan Prakash Chand" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className={`transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Hi, I'm</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">Rajan Prakash Chand</h1>
          <div className="h-1 w-24 bg-primary/20 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            A software engineer driven by curiosity and desire to push the boundaries of what is possible with technology.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With over four years of experience working in the IT industry, I have gained a deep understanding of software design and development principles, as well as expertise in various programming languages and frameworks.
          </p>
          <p className="italic text-muted-foreground mb-12 max-w-2xl mx-auto">
            I believe that diversity is essential to creating truly innovative solutions, and I am committed to bringing my unique background and perspective to every project I work on.
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>Message Me</span>
          </a>
        </div>
        
        <div className={`flex justify-center space-x-6 mb-12 transform transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        
        <div className={`transform transition-all duration-700 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="#education" 
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-float"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
