import React from 'react';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'IBM Certified Associate Developer',
    desc: 'Quantum Computation using Qiskit v0.2X. (C0010300).',
    issuer: 'IBM',
    icon: Award
  },
  {
    title: 'Game Development',
    desc: 'Professional certification from XAMK.',
    issuer: 'XAMK',
    icon: Award
  },
  {
    title: 'Introduction to Quantum Computing',
    desc: 'Qubit By Qubit program, IBM Sponsored.',
    issuer: 'IBM / Qubit By Qubit',
    icon: Award
  },
  {
    title: 'Specialization in Mixed Reality',
    desc: 'Unity XR: How to build AR and VR Apps.',
    issuer: 'Unity',
    icon: Award
  },
  {
    title: 'Deep Learning & AI Specializations',
    desc: 'Introduction to Deep Learning, AI Applications on Azure, AWS Machine Learning, and TensorFlow for AI, ML, and DL.',
    issuer: 'Multi-Platform',
    icon: Award
  },
  {
    title: 'Cloud Computing Basics',
    desc: 'Introduction to Cloud Identity, Cloud Computing Basics (Cloud 101).',
    issuer: 'Google Cloud',
    icon: Award
  },
  {
    title: 'Cybersecurity Fundamentals',
    desc: 'Pentesting and Ethical Hacking, ICSI and Autopsy Basics and Hands-On.',
    issuer: 'ICSI',
    icon: Award
  }
];

export default function CertificationsApp() {
  return (
    <div className="p-6 space-y-4 overflow-y-auto h-full scrollbar-hide">
      <div className="grid grid-cols-1 gap-3">
        {certifications.map((cert, i) => (
          <div key={i} className="futuristic-card rounded-lg p-4 flex items-center gap-4 group hover:border-green-500/30 transition-all">
            <div className="hud-corner hud-corner-tl w-1! h-1!" />
            <div className="hud-corner hud-corner-br w-1! h-1! opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-full bg-green-500/5 flex items-center justify-center shrink-0 group-hover:bg-green-500/10 transition-colors">
              <cert.icon size={20} className="text-green-400" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white group-hover:text-green-400 transition-colors">{cert.title}</h4>
                <CheckCircle2 size={12} className="text-green-500/50" />
              </div>
              <p className="text-[10px] text-white/50 leading-relaxed">{cert.desc}</p>
              <div className="text-[8px] text-green-400/60 uppercase tracking-widest font-bold">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
