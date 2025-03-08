
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Widget: React.FC = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Widget */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <div className="h-1 w-12 bg-primary/20 mb-6"></div>
            <p className="text-muted-foreground mb-4">
              A passionate software engineer with expertise in various programming languages and frameworks. I am dedicated to creating innovative and efficient solutions to complex problems.
            </p>
            <a 
              href="#about" 
              className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          {/* Useful Links Widget */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <div className="h-1 w-12 bg-primary/20 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a 
                  href="#meeting" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                  <span>Schedule a Meeting</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Membership Widget */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Membership</h3>
            <div className="h-1 w-12 bg-primary/20 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center mr-3">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium">IEEE Computer Society</h4>
                  <p className="text-sm text-muted-foreground">Professional Member</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center mr-3">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium">ACM</h4>
                  <p className="text-sm text-muted-foreground">Association for Computing Machinery</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center mr-3">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium">Stanford Alumni Association</h4>
                  <p className="text-sm text-muted-foreground">Alumni Member</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center mr-3">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium">Google Developers Group</h4>
                  <p className="text-sm text-muted-foreground">Active Member</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
