
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "California, USA",
    duration: "2017 - 2019",
    description: "Specialized in Artificial Intelligence and Machine Learning with a focus on neural networks and deep learning algorithms. Completed thesis on 'Optimizing Neural Network Architectures for Edge Devices'."
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Information Technology",
    institution: "National Institute of Technology",
    location: "Delhi, India",
    duration: "2013 - 2017",
    description: "Graduated with honors. Focused on software engineering, data structures, and algorithm design. Completed several projects including a real-time chat application and an e-commerce platform."
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Delhi Public School",
    location: "Delhi, India",
    duration: "2011 - 2013",
    description: "Graduated with distinction in Mathematics, Physics, and Computer Science. Participated in national-level programming competitions and hackathons."
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and qualifications</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="glass-card p-6 card-hover"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
              <h4 className="text-lg mb-4">{item.institution}</h4>
              
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{item.duration}</span>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{item.location}</span>
              </div>
              
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
