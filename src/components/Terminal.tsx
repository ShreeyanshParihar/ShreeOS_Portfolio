import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, Send, X, Minus, Square, Cpu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'ai' | 'system';
  content: string;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'SHREE_OS [Version 1.0.42]' },
    { role: 'system', content: '(c) 2026 Shreeyansh Parihar. All rights reserved.' },
    { role: 'system', content: 'AI Core initialized. Type "help" for protocols or ask me anything about Shreeyansh' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCommand = async (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    
    if (lowerCmd === 'clear') {
      setMessages([{ role: 'system', content: 'Terminal cleared.' }]);
      return;
    }

    if (lowerCmd === 'help') {
      setMessages(prev => [...prev, 
        { role: 'user', content: cmd },
        { role: 'system', content: 'Available protocols: clear, help, resume, projects, skills, contact, experience, certificates, ai_skills' }
      ]);
      return;
    }

    const isProtocol = ['resume', 'projects', 'skills', 'contact', 'experience', 'certificates', 'ai_skills'].includes(lowerCmd);
    
    setMessages(prev => [...prev, { role: 'user', content: cmd }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: isProtocol 
            ? `Provide a detailed summary of Shreeyansh's ${lowerCmd} based on the context. Use markdown formatting.`
            : cmd
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.text || 'Error generating response.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'system', content: 'Error: Connection to AI core failed.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const cmd = input;
    setInput('');
    handleCommand(cmd);
  };

  return (
    <div className="flex flex-col h-full bg-black/95 font-mono text-sm terminal-overlay relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 z-10 animate-pulse" />
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'text-yellow-400' : msg.role === 'ai' ? 'text-green-400' : 'text-white/30 italic'}`}>
            <span className="shrink-0 font-bold opacity-50">
              {msg.role === 'user' ? 'λ' : msg.role === 'ai' ? '◈' : '::'}
            </span>
            <div className="flex-1 prose prose-invert prose-sm max-w-none wrap-break-word min-w-0 prose-headings:font-black prose-headings:text-green-400 prose-headings:uppercase prose-headings:tracking-widest prose-headings:mb-2 prose-headings:mt-4 first:prose-headings:mt-0">
              {msg.role === 'ai' ? (
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              ) : (
                <span className="whitespace-pre-wrap">{msg.content}</span>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex text-green-400 animate-pulse gap-3">
            <span className="shrink-0 font-bold opacity-50">◈</span>
            <div className="flex items-center gap-2">
              <Cpu size={14} className="animate-spin" />
              <span>Processing query...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-3">
        <div className="flex items-center gap-2 text-green-500 font-bold shrink-0">
          <span>SHREE_OS</span>
          <span className="animate-pulse">_</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder:text-green-900/50"
          placeholder="Enter command or query..."
          autoFocus
        />
        <button type="submit" disabled={isLoading} className="text-green-500 hover:text-green-400 transition-all hover:scale-110 disabled:opacity-50">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
