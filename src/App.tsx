import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal as TerminalIcon, 
  FileText, 
  Briefcase, 
  Cpu, 
  Mail, 
  Layout, 
  Clock,
  Wifi,
  Battery,
  Search,
  Menu,
  Activity
} from 'lucide-react';
import { WindowId, WindowState, AppIcon } from './types';
import Window from './components/Window';
import Terminal from './components/Terminal';
import ResumeApp from './components/ResumeApp';
import ProjectsApp from './components/ProjectsApp';
import SkillsApp from './components/SkillsApp';
import ExperienceApp from './components/ExperienceApp';
import DashboardApp from './components/DashboardApp';
import CoreAIApp from './components/CoreAIApp';
import CertificationsApp from './components/CertificationsApp';
import Background from './components/Background';
import { Github, Linkedin, Phone, Award, BrainCircuit } from 'lucide-react';

const APP_ICONS: AppIcon[] = [
  { id: 'dashboard', title: 'Dashboard', icon: 'Activity' },
  { id: 'terminal', title: 'Terminal', icon: 'TerminalIcon' },
  { id: 'core-ai', title: 'Core AI', icon: 'BrainCircuit' },
  { id: 'experience', title: 'Experience', icon: 'Briefcase' },
  { id: 'projects', title: 'Projects', icon: 'Layout' },
  { id: 'skills', title: 'Skills', icon: 'Cpu' },
  { id: 'certifications', title: 'Certs', icon: 'Award' },
  { id: 'resume', title: 'Resume PDF', icon: 'FileText' },
  { id: 'contact', title: 'Contact', icon: 'Mail' },
];

export default function App() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'dashboard', title: 'System Dashboard', isOpen: true, isMinimized: false, isMaximized: false, zIndex: 11 },
    { id: 'terminal', title: 'AI Terminal', isOpen: true, isMinimized: false, isMaximized: false, zIndex: 10 },
    { id: 'core-ai', title: 'Core AI Capabilities', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    { id: 'experience', title: 'Career Timeline', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    { id: 'resume', title: 'Resume Document', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    { id: 'projects', title: 'Projects', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    { id: 'skills', title: 'Skills', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    { id: 'certifications', title: 'Certifications', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    { id: 'contact', title: 'Contact', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
  ]);

  const [time, setTime] = useState(new Date());
  const [isBooting, setIsBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    const logs = [
      'Loading kernel...',
      'Initializing AI Core...',
      'Mounting file systems...',
      'Establishing neural link...',
      'Starting SHREE_OS...'
    ];

    let logIndex = 0;
    const logInterval = setInterval(() => {
      setBootLogs(prev => {
        if (prev.length < logs.length) {
          return [...prev, logs[prev.length]];
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 600);

    const bootTimer = setTimeout(() => setIsBooting(false), 4500);
    
    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
      clearTimeout(bootTimer);
    };
  }, []);

  const openWindow = (id: WindowId) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, isOpen: true, isMinimized: false, zIndex: Math.max(...prev.map(win => win.zIndex)) + 1 };
      }
      return w;
    }));
    setIsMenuOpen(false);
  };

  const closeWindow = (id: WindowId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
  };

  const minimizeWindow = (id: WindowId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
  };

  const maximizeWindow = (id: WindowId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  };

  const focusWindow = (id: WindowId) => {
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex));
      return prev.map(w => w.id === id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w);
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TerminalIcon': return <TerminalIcon size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      case 'Layout': return <Layout size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Mail': return <Mail size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'Award': return <Award size={24} />;
      case 'BrainCircuit': return <BrainCircuit size={24} />;
      default: return <FileText size={24} />;
    }
  };

  if (isBooting) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center font-mono text-green-500 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className="text-4xl font-bold tracking-tighter mb-8 glow-text text-center">SHREE OS</div>
          
          <div className="w-full space-y-1 mb-8 px-8 h-32 overflow-hidden flex flex-col justify-end">
            <AnimatePresence>
              {bootLogs.map((log) => (
                <motion.div
                  key={log}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] flex justify-between items-center"
                >
                  <span className="opacity-70 uppercase tracking-widest">{log}</span>
                  <span className="text-green-500 font-bold">DONE</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-[10px] opacity-50 tracking-[0.5em] mb-4 uppercase">Initializing Core Systems</div>
          
          <div className="w-64 h-1 bg-green-900/30 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 w-1/2 h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-black">
      <Background />
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10001 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
      
      {/* Desktop Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-1" />

      {/* HUD Crosshair Overlay */}
      <div className="absolute inset-0 pointer-events-none z-1 flex items-center justify-center opacity-20">
        <div className="relative w-64 h-64 border border-green-500/20 rounded-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-500/20" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-green-500/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-green-500/40 rounded-full" />
        </div>
      </div>

      {/* HUD Data Corners */}
      <div className="absolute bottom-16 right-4 z-1 pointer-events-none text-[8px] font-mono text-green-500/40 text-right uppercase tracking-widest hidden lg:block">
        <div>System: SHREE_OS_CORE</div>
        <div>Kernel: v1.0.42_STABLE</div>
        <div>Neural_Link: ACTIVE</div>
        <div>Uptime: {Math.floor(performance.now() / 1000)}s</div>
      </div>

      <div className="absolute bottom-16 left-4 z-1 pointer-events-none text-[8px] font-mono text-green-500/40 uppercase tracking-widest hidden lg:block">
        <div>LAT: 25.2048° N</div>
        <div>LONG: 55.2708° E</div>
        <div>LOC: DUBAI_UAE</div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute inset-0 p-6 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-4 w-fit z-2">
        {APP_ICONS.map((app) => (
          <motion.button
            key={app.id}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openWindow(app.id)}
            className="w-20 h-24 flex flex-col items-center justify-center gap-2 rounded-lg transition-colors group"
          >
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white/80 group-hover:text-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
              {getIcon(app.icon)}
            </div>
            <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest text-center group-hover:text-white transition-colors">
              {app.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Windows */}
      <AnimatePresence>
        {windows.map((win) => (
          <Window
            key={win.id}
            {...win}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onMaximize={maximizeWindow}
            onFocus={focusWindow}
          >
            {win.id === 'terminal' && <Terminal />}
            {win.id === 'resume' && <ResumeApp />}
            {win.id === 'experience' && <ExperienceApp />}
            {win.id === 'projects' && <ProjectsApp />}
            {win.id === 'skills' && <SkillsApp />}
            {win.id === 'dashboard' && <DashboardApp />}
            {win.id === 'core-ai' && <CoreAIApp />}
            {win.id === 'certifications' && <CertificationsApp />}
            {win.id === 'contact' && (
              <div className="p-8 flex flex-col items-center justify-center h-full text-center space-y-6">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center text-green-400 glow-border">
                  <Mail size={40} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight glow-text text-green-400">Get in Touch</h2>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Available for global opportunities</p>
                </div>
                
                <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
                  <a href="mailto:shreeyanshparihar@gmail.com" className="futuristic-card p-3 rounded-lg flex items-center gap-4 hover:border-green-500/50 transition-all">
                    <Mail size={18} className="text-green-400" />
                    <span className="text-xs font-medium">shreeyanshparihar@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/shreeyansh-parihar" target="_blank" className="futuristic-card p-3 rounded-lg flex items-center gap-4 hover:border-green-500/50 transition-all">
                    <Linkedin size={18} className="text-green-400" />
                    <span className="text-xs font-medium">linkedin.com/in/shreeyansh-parihar</span>
                  </a>
                  <a href="https://github.com/shreeyanshparihar" target="_blank" className="futuristic-card p-3 rounded-lg flex items-center gap-4 hover:border-green-500/50 transition-all">
                    <Github size={18} className="text-green-400" />
                    <span className="text-xs font-medium">github.com/shreeyanshparihar</span>
                  </a>
                  <div className="futuristic-card p-3 rounded-lg flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <Phone size={18} className="text-green-400" />
                      <span className="text-xs font-medium">+971 529412388 (UAE)</span>
                    </div>
                    <div className="flex items-center gap-4 pl-8">
                      <span className="text-xs font-medium text-white/40">+91 9530056916 (IN)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Window>
        ))}
      </AnimatePresence>

      {/* Start Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-14 left-4 w-64 glass rounded-xl overflow-hidden z-10000 window-shadow border border-white/20"
            style={{ bottom: '56px', top: 'auto' }}
          >
            <div className="p-4 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-black">SP</div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest">Shreeyansh Parihar</div>
                  <div className="text-[8px] text-green-400/60 uppercase tracking-widest">AI Engineer</div>
                </div>
              </div>
            </div>
            <div className="p-2">
              {APP_ICONS.map(app => (
                <button
                  key={app.id}
                  onClick={() => openWindow(app.id)}
                  className="w-full p-3 flex items-center gap-3 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
                >
                  <div className="text-green-500">{getIcon(app.icon)}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{app.title}</span>
                </button>
              ))}
            </div>
            <div className="p-4 bg-black/40 text-[8px] text-white/20 uppercase tracking-[0.3em] text-center">
              SHREE_OS CORE v1.0.42
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-12 glass border-t border-white/10 flex items-center justify-between px-4 z-10000"
        style={{ bottom: '0px', top: 'auto' }}
      >
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-8 h-8 flex items-center justify-center rounded transition-all ${isMenuOpen ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'hover:bg-white/10 text-green-500'}`}
          >
            <Menu size={20} />
          </button>
          <div className="h-6 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-1">
            {windows.filter(w => w.isOpen).map(w => (
              <button
                key={w.id}
                onClick={() => focusWindow(w.id)}
                className={`px-3 h-8 rounded flex items-center gap-2 transition-all ${
                  !w.isMinimized ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5'
                }`}
              >
                <div className="text-white/60">{getIcon(APP_ICONS.find(i => i.id === w.id)?.icon || '')}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">
                  {w.title}
                </span>
                {!w.isMinimized && <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]" />}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/60">
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <Wifi size={14} />
            <Battery size={14} />
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold tracking-tighter">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="text-[8px] opacity-50 uppercase tracking-widest">
              {time.toLocaleDateString([], { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
