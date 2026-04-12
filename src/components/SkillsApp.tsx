import React from 'react';

const skillGroups = [
  {
    category: 'AI & LLM',
    skills: ['LangChain', 'LangGraph', 'n8n', 'Masta', 'Aria', 'LiteLLM', 'OpenRouter', 'Ollama', 'Claude API', 'OpenAI API', 'Gemini API']
  },
  {
    category: 'AI Tooling',
    skills: ['MCP', 'CopilotKit', 'AG-UI Protocol', 'BMAD', 'Specify Kit', 'Claude Code', 'GitHub Copilot', 'Cursor', 'RAG', 'Vector DBs', 'Agentic LLM']
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'C#', 'Dart', 'Lua', 'C++', 'JAVA', 'Python', 'HTML', 'CSS', 'PHP', 'SQL', 'NoSQL', 'GraphQL', 'TypeScript', 'Objective-C', 'Swift']
  },
  {
    category: 'Technologies',
    skills: ['Unity 3D', 'MERN', 'Android', 'iOS', 'MacOS', 'QGIS', 'AR/VR', 'MEAN', 'MongoDB', 'MySQL', 'Microsoft SQL', 'AWS', 'GCP', 'Firebase', 'Tangible Tables', 'Git', 'SVN', 'Stripe', 'PayTM']
  },
  {
    category: 'Frameworks',
    skills: ['Flutter', 'Next JS', 'ReactJS', 'React Native', 'Scikit Learn', 'AR Foundation', 'WebRTC', 'Bootstrap', 'Tailwind', 'Material UI', 'Qiskit', 'ElectronJS', 'NodeJS', 'WebSockets', 'Google Maps API', 'Springboot', 'ASP.NET', 'Angular', 'Vue']
  },
  {
    category: 'Concepts',
    skills: ['UX', 'OOP', 'Functional Programming', 'Data Structures', 'Algorithms', 'REST', 'Sockets', 'gRPC', 'UML', 'MVC', 'BLoc', 'Singleton', 'Event-Driven', 'CI / CD', 'Agile', 'JWT', 'Blockchain', 'ERC 20']
  }
];

export default function SkillsApp() {
  return (
    <div className="p-6 space-y-6">
      {skillGroups.map((group, i) => (
        <div key={i}>
          <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, j) => (
              <div 
                key={j} 
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded flex items-center gap-2 hover:border-green-500/50 transition-colors group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                <span className="text-sm text-white/80">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
