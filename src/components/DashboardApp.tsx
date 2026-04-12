import React from 'react';
import { motion } from 'motion/react';
import { Activity, Users, Zap, Globe, Shield, Cpu, User, Code, Brain, Rocket } from 'lucide-react';

const stats = [
  { label: 'Experience', value: '5+ Years', icon: User, color: 'text-green-400' },
  { label: 'AI Projects', value: '20+', icon: Brain, color: 'text-green-400' },
  { label: 'Full Stack Projects', value: '80+', icon: Brain, color: 'text-green-400' },
  { label: 'Users Scaled', value: '2,000+', icon: Users, color: 'text-green-400' },
  { label: 'Full Stack', value: 'AI Engineer', icon: Code, color: 'text-green-400' },
];

export default function DashboardApp() {
  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full scrollbar-hide">
      <div className="flex flex-col gap-1 mb-2">
        <h1 className="text-2xl font-black text-white uppercase tracking-tighter glow-text">
          Shreeyansh Parihar
        </h1>
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-linear-to-r from-green-500/50 to-transparent" />
          <span className="text-[8px] text-green-500/60 uppercase tracking-[0.3em] font-bold">System Identity Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="futuristic-card rounded-lg p-4 flex flex-col gap-2">
            <div className="hud-corner hud-corner-tl w-1! h-1!" />
            <div className="hud-corner hud-corner-br w-1! h-1!" />
            <div className="flex items-center justify-between">
              <stat.icon size={16} className={stat.color} />
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Verified</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tighter">{stat.value}</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="futuristic-card rounded-lg p-5 space-y-4">
        <div className="hud-corner hud-corner-tl w-2! h-2!" />
        <div className="hud-corner hud-corner-br w-2! h-2!" />
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <User size={14} className="text-green-400" /> Bio Protocol
          </h3>
          <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Active</span>
        </div>
        <p className="text-xs text-white/60 leading-relaxed">
          Applied AI Engineer with 5+ years shipping production systems. Designs agentic LLM pipelines, RAG systems, 
          LLM gateways, and MCP-powered integrations that handle real traffic at scale. 
          Currently leading a team of 4 delivering AI-powered tools to 2,000+ users across UAE government entities.
        </p>
      </div>

      <div className="futuristic-card rounded-lg p-5 space-y-4">
        <div className="hud-corner hud-corner-tl w-2! h-2!" />
        <div className="hud-corner hud-corner-br w-2! h-2!" />
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Cpu size={14} className="text-green-400" /> Core Specialization
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: 'Agentic Systems', level: 95 },
            { label: 'Full Stack Dev', level: 90 },
            { label: 'Game Engines', level: 85 },
          ].map((skill, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/40">
                <span>{skill.label}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className="h-full bg-green-500/50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="futuristic-card rounded-lg p-5 space-y-4">
        <div className="hud-corner hud-corner-tl w-2! h-2!" />
        <div className="hud-corner hud-corner-br w-2! h-2!" />
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Zap size={14} className="text-green-400" /> Education
          </h3>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-bold text-white">Engineering College, Ajmer</div>
          <div className="text-[10px] text-white/60">Bachelor in Computer Science Engineering (August 2017 - July 2021)</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="futuristic-card rounded-lg p-5 space-y-4">
          <div className="hud-corner hud-corner-tl w-2! h-2!" />
          <div className="hud-corner hud-corner-br w-2! h-2!" />
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Globe size={14} className="text-green-400" /> Languages
            </h3>
          </div>
          <div className="space-y-2">
            {[
              { lang: 'English', level: 'Professional' },
              { lang: 'Hindi', level: 'Native' },
              { lang: 'Arabic', level: 'Beginner' },
            ].map((l, i) => (
              <div key={i} className="flex justify-between text-[10px]">
                <span className="text-white/80">{l.lang}</span>
                <span className="text-white/40 uppercase">{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="futuristic-card rounded-lg p-5 space-y-4">
          <div className="hud-corner hud-corner-tl w-2! h-2!" />
          <div className="hud-corner hud-corner-br w-2! h-2!" />
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Users size={14} className="text-green-400" /> Soft Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Team Leading', 'Stakeholders Management', 'Communication Skills', 'Optimistic', 'Risk Planning'].map((s, i) => (
              <span key={i} className="text-[9px] px-2 py-1 bg-white/5 border border-white/10 rounded text-white/60 uppercase tracking-widest">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="futuristic-card rounded-lg p-5">
        <div className="hud-corner hud-corner-tl w-2! h-2!" />
        <div className="hud-corner hud-corner-br w-2! h-2!" />
        <div className="flex items-center gap-2 mb-4">
          <Zap size={14} className="text-green-400" />
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">Neural Status</h3>
        </div>
        <div className="space-y-3">
          {[
            'Core: Thinking in TypeScript & Python',
            'Location: Dubai, UAE (GMT+4)',
            'Status: Open to high-impact AI roles',
          ].map((log, i) => (
            <div key={i} className="flex gap-3 text-[10px] font-mono">
              <span className="text-green-500/40">●</span>
              <span className="text-white/60">{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
