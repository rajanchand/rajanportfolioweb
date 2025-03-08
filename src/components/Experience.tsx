
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
    duration: "Jan 2021 - Present",
    description: "Leading a team of developers to build and maintain scalable web applications using modern JavaScript frameworks. Implementing CI/CD pipelines and contributing to architecture decisions.",
    responsibilities: [
      "Spearheaded the development of a real-time analytics dashboard that improved data visualization by 40%",
      "Mentored junior developers and conducted code reviews to ensure high code quality",
      "Optimized API performance resulting in a 60% reduction in response time",
      "Collaborated with product managers to define feature requirements and roadmaps"
    ]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    duration: "Mar 2019 - Dec 2020",
    description: "Developed and maintained web applications and services using .NET Core and Azure cloud services. Worked in an agile team environment to deliver features and fix bugs.",
    responsibilities: [
      "Implemented authentication and authorization features using Azure Active Directory",
      "Built RESTful APIs consumed by frontend applications using ASP.NET Core",
      "Collaborated with UX designers to implement responsive and accessible user interfaces",
      "Participated in daily stand-ups and sprint planning sessions"
    ]
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    duration: "May 2018 - Aug 2018",
    description: "Contributed to the development of an internal tool for managing AWS resources. Worked with experienced engineers to learn best practices and software development methodologies.",
    responsibilities: [
      "Developed frontend components using React and TypeScript",
      "Created unit and integration tests to ensure code reliability",
      "Fixed bugs and implemented small features in an existing codebase",
      "Presented project progress to team members and stakeholders"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and accomplishments</p>
        
        <div className="space-y-12">
          {experienceData.map((job) => (
            <div 
              key={job.id}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center md:items-start">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2 mb-4">
                  <img src={job.logo} alt={job.company} className="max-w-full max-h-full object-contain" />
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                <h4 className="text-lg mb-3">{job.company}</h4>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{job.duration}</span>
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-8 md:border-l border-border">
                <p className="text-muted-foreground mb-4">{job.description}</p>
                
                <h5 className="font-semibold mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>Key Responsibilities:</span>
                </h5>
                
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 mr-2"></div>
                      <span className="text-sm">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
