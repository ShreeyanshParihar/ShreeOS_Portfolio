import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart Office',
    tags: ['Flutter', 'NestJS', 'Mastra', 'MCP', 'CopilotKit', 'Postgres'],
    description: 'AI-enabled enterprise productivity application deployed for 2,000+ employees across UAE government entities. Integrates with Office 365, SAP, SuccessFactors & ManageEngine via custom MCP server.'
  },
  {
    title: 'Agile Methodology Proposal',
    tags: ['Agile', 'Project Management', 'Documentation'],
    description: 'A comprehensive proposal for implementing Agile methodologies in software development teams.',
    link: 'https://shreeyanshparihar.github.io/agile_proposal/'
  },
  {
    title: 'Mosaic Photowall',
    location: 'Giddam, Qatar (FIFA 2022)',
    tags: ['Unity 3D', 'C#'],
    description: 'Interactive mosaic photowall system developed for the FIFA World Cup 2022 events.'
  },
  {
    title: 'Live Trivia Quiz Game System',
    location: 'Havoline, Caltex, MOE, UAE',
    tags: ['Unity 3D', 'C#'],
    description: 'Real-time multiplayer trivia system for brand engagement at major malls.'
  },
  {
    title: 'Dance, Exercise, and Runner Tracking Vending Machine',
    location: 'Saudi (Gamers8) & Qatar (FIFA 2022)',
    tags: ['Unity 3D', 'C#', 'Microsoft Kinect Sensor'],
    description: 'Motion-tracked interactive vending machine experience for major sporting events.'
  },
  {
    title: 'ELecture App and Mgmt. Portal',
    location: 'Dept. of Technical Education, Govt. of Rajasthan',
    tags: ['PHP', 'JAVA', 'NextJS', 'Android Studio', 'MySQL'],
    description: 'Comprehensive educational management portal and mobile application.'
  },
  {
    title: 'LinkedIn Clone',
    tags: ['NextJS', 'ReactJS', 'Python', 'Django', 'MongoDB', 'Material UI'],
    description: 'Full-stack professional networking platform clone with real-time features.'
  },
  {
    title: 'Facial Recognition Attendance System',
    location: 'Hackathon 2020',
    tags: ['Python', 'Tkinter', 'MySQL', 'DL'],
    description: 'Automated attendance tracking using deep learning facial recognition.'
  }
];

export default function ProjectsApp() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <div key={i} className="futuristic-card rounded-lg p-5 hover:border-green-500/50 transition-all group">
          <div className="hud-corner hud-corner-tl w-2! h-2!" />
          <div className="hud-corner hud-corner-br w-2! h-2! opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-white group-hover:text-green-400 transition-colors tracking-tight">{project.title}</h3>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-green-400 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
          <p className="text-xs text-white/50 mb-5 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, j) => (
              <span key={j} className="text-[9px] px-2 py-1 bg-green-500/5 text-green-400/70 border border-green-500/10 rounded uppercase tracking-wider font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
