
import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

const AISearch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSkip = () => {
    setIsVisible(false);
    document.body.classList.remove('overflow-hidden');
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      setIsVisible(false);
      document.body.classList.remove('overflow-hidden');
      
      // Scroll to the section that matches the query
      const searchTerms: Record<string, string[]> = {
        home: ['home', 'rajan', 'chand', 'software engineer'],
        education: ['education', 'school', 'university', 'college', 'degree'],
        skills: ['skills', 'technical', 'programming', 'networking'],
        experience: ['experience', 'work', 'job', 'organization'],
        about: ['about', 'profile', 'background'],
        contact: ['contact', 'email', 'phone', 'location', 'map'],
        meeting: ['meeting', 'calendly', 'schedule', 'appointment'],
      };
      
      const lowerQuery = query.toLowerCase();
      let targetSection = 'home';
      
      // Find matching section
      for (const [section, terms] of Object.entries(searchTerms)) {
        if (terms.some(term => lowerQuery.includes(term))) {
          targetSection = section;
          break;
        }
      }
      
      // Scroll to section after a short delay
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 1000);
  };
  
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isVisible]);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-lg overflow-hidden animate-scale-in">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">AI Search Assistant</h2>
            <button 
              onClick={handleSkip}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Search for anything in Rajan's portfolio or skip to browse manually.
          </p>
          
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search for skills, education, experience..."
                className="w-full bg-background border border-border rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={handleSkip}
                className="px-5 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                Skip
              </button>
              
              <button
                type="submit"
                disabled={isSearching}
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center"
              >
                {isSearching ? 'Searching...' : 'Search'}
                {!isSearching && <ArrowRight className="ml-2 w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AISearch;
