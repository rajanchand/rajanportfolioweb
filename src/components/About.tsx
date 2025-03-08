
import React from 'react';
import { User, Award, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">
              I'm Rajan Prakash Chand, a passionate Technical Engineer
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Born and raised in Delhi, India, I've always been fascinated by technology and its potential to transform lives. My journey in the world of Network began when I was just 14.
            </p>
            
            <p className="text-muted-foreground mb-4">
              After completing my Bachelor's degree in Information Technology from the Asian College of Higher studies from Tribhuwan University, I pursued a Master's in Information Technology from University of West of the Scotland , specializing in Project Management and Networking.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Throughout my four-year professional career, I've had the opportunity to work with some of the world's leading technology companies, including Kalash Services, WorldLink Communication Ltd, and Dish Media Network. These experiences have not only honed my technical skills but also taught me the importance of collaboration, communication, and continuous learning.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Outside of work, I enjoy hiking, photography, and contributing to open-source projects. I'm also an avid reader and love exploring new cultures through travel. I believe that these diverse interests enrich my perspective and help me bring creative solutions to complex technical challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                <span>10+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span>4+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 text-primary mr-2" />
                <span>200+ Clients Worldwide</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-primary mr-2" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Rajan Prakash Chand" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
