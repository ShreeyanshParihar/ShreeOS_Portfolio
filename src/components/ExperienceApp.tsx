import React from 'react';
import { Briefcase, Calendar, MapPin, Code } from 'lucide-react';

const experiences = [
  {
    company: 'Morohub',
    role: 'Full Stack Developer',
    period: 'April 2024 - Present',
    location: 'Dubai, UAE',
    points: [
      'Leading a team of 4 engineers shipping an AI-powered office productivity app to 2,000+ employees across DEWA and UAE government entities — production, not prototype.',
      'Built a custom MCP server connecting enterprise backends to AI agents via tool-use & structured outputs; CopilotKit MCP client with dynamic AI-driven UI rendering via MCP app extensions.',
      'Architected multi-model LLM gateway (LiteLLM + OpenRouter + Ollama) with fallback, caching & cost control — routing across GPT-4, Claude, Gemini and on-premise models.',
      'Implemented Spec-to-Code (BMAD + Specify Kit) — orchestrating Claude Code, Cursor & Copilot through full Agile cycles as AI PM, shipping in days what traditionally takes sprints.',
    ],
    skills: ['Mastra', 'MCP', 'ARIA', 'n8n', 'CopilotKit', 'LiteLLM', 'Flutter', 'GraphQL', 'Hasura', 'PostgreSQL', 'NextJS', 'NestJS']
  },
  {
    company: 'DVCC (Dubai Verse Cup)',
    role: 'Unity Game Developer / Full Stack Engineer',
    period: 'Dec 2022 - Dec 2023',
    location: 'Dubai, UAE',
    points: [
      'Constructed a Metaverse horse racing platform with DRC, which increased awareness about the Dubai World Cup by 20%. And let everyone experience horse riding virtually.',
      'Invented MVPs using H5 technology, leading the company to a $10M valuation.',
    ],
    skills: ['Unity 3D', 'C#', 'Lua', 'Vue', 'UniApp', 'HTML', 'CSS']
  },
  {
    company: 'Lazulite',
    role: 'Senior Game Developer / Team Lead',
    period: 'March 2022 - Nov 2022',
    location: 'Dubai, UAE',
    points: [
      'Built over 70 immersive applications for over 20 brands across GCC with a 100% success rate, increasing user engagement in events by an average of 40%, increasing revenue of AED 0.5M in GITEX 2022.',
      'Wrote reusable templates and libraries to increase the team’s efficiency by 30% as a team lead.',
    ],
    skills: ['Unity 3D', 'C#', 'NextJS', 'Firebase', 'AR Foundation', 'OpenXR', 'TUIO', 'OSC', 'ElectronJS', 'Tangible Tables']
  },
  {
    company: 'Seclore',
    role: 'Product Engineer',
    period: 'July 2021 - Feb 2022',
    location: 'Mumbai, India',
    points: [
      'Implemented browser-based login to MacClient App which has more than 10000 users, This feature update made the login process 30% easier for users.',
      'Initiated an internal project and The team revitalized the codebase from Objective-C to Swift, making further development for the organization 2x faster.',
    ],
    skills: ['Objective-C', 'Swift', 'Java', 'Microsoft SQL Server', 'HTML', 'CSS']
  },
  {
    company: 'Ditanbiz',
    role: 'Software Developer Intern',
    period: 'June 2020 - July 2021',
    location: 'New Jersey, US (Remote)',
    points: [
      'Deployed makethenstrong.org, A YouTube-like platform for people suffering from Alopecia which is in 3% of the population of the world. Organized uploaded vlogs against Alopecia into a Pipeline using FFMPEG for optimized storage size.',
      'Initiated ditansource.com, A Gig-searching platform that targets to perform 20% better than others by connecting clients with suitable freelancers using recommendations.',
    ],
    skills: ['NextJS', 'MongoDB', 'Java', 'Springboot', 'React Native', 'Stripe', 'Angular']
  },
  {
    company: 'Softezi Solutions LLP',
    role: 'Flutter Developer Intern',
    period: 'August 2020 - Nov 2020',
    location: 'Pune, India',
    points: [
      'Revamped supply chain logistics management system as a product with integrated real-time location tracking and inventory management applications, within a 3 App integrated system.',
      'Led many Indian startups to increase their sales and management by 10%. Reference JayQu – Apps on Google Play.',
    ],
    skills: ['Flutter', 'Firebase', 'Socket Server', 'WebRTC', 'PayTM']
  },
  {
    company: 'EHS Prints',
    role: 'Mobile App Developer Intern',
    period: 'April 2020 - June 2020',
    location: 'Bhopal, India',
    points: [
      'Launched an E-Commerce App for selling industrial signages and posters for hazards, warnings, and instructions at more than 700 factories across India. Reference EHS Prints - Apps on Google Play.',
    ],
    skills: ['Flutter', 'Firebase']
  },
  {
    company: 'Veer Jijabai Technological Institute',
    role: 'Research Intern',
    period: 'May 2019 - July 2019',
    location: 'Mumbai, India',
    points: [
      'Researched an Unsupervised ML model for a Periodic Taxi ride prediction system, targeted on more than 100 locations in a city map. Saved on fuel costs and fleet management issues during peak hours by 25% for the Cab companies.',
    ],
    skills: ['Python', 'Scikit-Learn', 'Tensorflow', 'Keras', 'Pandas', 'Matplotlib', 'QGIS']
  }
];

export default function ExperienceApp() {
  return (
    <div className="p-6 space-y-8 text-white/80 scrollbar-hide h-full overflow-y-auto">
      <section>
        <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
          <Briefcase size={18} className="text-green-400" /> Career Timeline
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{exp.role}</h3>
                  <div className="flex items-center gap-3 text-xs text-green-400/80 mt-1 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {exp.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                  </div>
                </div>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-full flex items-center gap-1 text-white/40 font-mono">
                  <Calendar size={10} /> {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm leading-relaxed text-white/60 flex gap-2">
                    <span className="text-green-500 mt-1.5 shrink-0">●</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, k) => (
                  <span key={k} className="text-[9px] px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
