
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Meeting: React.FC = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <section id="meeting" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Schedule a Meeting</h2>
        <p className="section-subtitle">Let's connect and discuss how we can work together</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1 order-2 lg:order-1 bg-card rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Why Schedule a Meeting?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Discuss Project Ideas</h4>
                  <p className="text-sm text-muted-foreground">Share your project requirements and get expert advice.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Technical Consultation</h4>
                  <p className="text-sm text-muted-foreground">Get insights on the best technologies for your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Collaboration Opportunities</h4>
                  <p className="text-sm text-muted-foreground">Explore how we can work together on exciting projects.</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              "Looking forward to connecting with you and discussing how I can contribute to your success."
            </p>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            {isCalendlyLoaded ? (
              <div 
                className="calendly-inline-widget rounded-xl overflow-hidden shadow-sm"
                data-url="https://calendly.com/rajanchand48?primary_color=191970"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
            ) : (
              <div className="w-full h-[630px] rounded-xl bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p>Loading calendar...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
