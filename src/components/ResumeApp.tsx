import React from 'react';
import { Download, FileText, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ResumeApp() {
  const resumeUrl = "/ShreyanshPariharResume_AIEngineer.pdf";

  return (
    <div className="flex flex-col h-full bg-black/20">
      {/* Header Actions */}
      <div className="p-4 glass border-b border-white/10 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
            <FileText size={16} className="text-blue-400" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white">Shreeyansh_Resume.pdf</div>
            <div className="text-[8px] text-white/40 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck size={8} /> Verified Document
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 glass hover:bg-white/10 rounded text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-blue-400 transition-all"
          >
            <ExternalLink size={12} /> <span className="hidden xs:inline">Open</span>
          </a>
          <a 
            href={resumeUrl} 
            download="Shreeyansh_Parihar_Resume.pdf"
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            <Download size={12} /> <span className="hidden xs:inline">Download</span>
          </a>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-hidden flex flex-col">
        <div className="flex-1 w-full glass rounded-lg overflow-hidden border border-white/10 relative group">
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <FileText size={48} className="text-white/20" />
              <div className="space-y-2">
                <p className="text-sm text-white/60">PDF preview not supported in this browser.</p>
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-xs"
                >
                  Click here to view the resume in a new tab
                </a>
              </div>
            </div>
          </object>
          {/* Overlay to prevent accidental interactions while scrolling the window */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors" />
        </div>
      </div>
      
      <div className="p-3 text-center border-t border-white/5 bg-black/40">
        <p className="text-[8px] text-white/20 uppercase tracking-[0.4em]">Secure Document Viewer v2.0</p>
      </div>
    </div>
  );
}
