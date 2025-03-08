
import React from 'react';
import { Code, Network, LineChart, Database, Server, Globe, Clock, Shield } from 'lucide-react';

const skillsCategories = [
  {
    id: 1,
    name: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Ruby", "Go"]
  },
  {
    id: 2,
    name: "Networking",
    icon: <Network className="w-6 h-6" />,
    skills: ["TCP/IP", "DNS", "DHCP", "VPN", "Routing Protocols", "Network Security", "Firewall Configuration"]
  },
  {
    id: 3,
    name: "Project Management",
    icon: <LineChart className="w-6 h-6" />,
    skills: ["Agile Methodology", "Scrum", "Kanban", "JIRA", "Confluence", "Risk Management", "Resource Planning"]
  },
  {
    id: 4,
    name: "Database Management",
    icon: <Database className="w-6 h-6" />,
    skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Database Design", "Query Optimization"]
  },
  {
    id: 5,
    name: "Technical Support",
    icon: <Server className="w-6 h-6" />,
    skills: ["Troubleshooting", "System Maintenance", "Help Desk Support", "Remote Assistance", "Documentation", "User Training"]
  },
  {
    id: 6,
    name: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "React", "Vue.js", "Angular", "Node.js", "RESTful APIs"]
  },
  {
    id: 7,
    name: "DevOps",
    icon: <Clock className="w-6 h-6" />,
    skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "AWS", "Azure", "Google Cloud Platform"]
  },
  {
    id: 8,
    name: "Information Security",
    icon: <Shield className="w-6 h-6" />,
    skills: ["Penetration Testing", "Vulnerability Assessment", "Encryption", "Authentication Systems", "Security Protocols", "Compliance"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">My areas of expertise and technical proficiency</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-primary">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
