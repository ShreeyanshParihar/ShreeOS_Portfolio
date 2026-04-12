import React from 'react';
import { motion, useDragControls } from 'motion/react';
import { X, Minus, Square } from 'lucide-react';
import { WindowId } from '../types';
import { Resizable } from 're-resizable';

interface WindowProps {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  onClose: (id: WindowId) => void;
  onMinimize: (id: WindowId) => void;
  onMaximize: (id: WindowId) => void;
  onFocus: (id: WindowId) => void;
  children: React.ReactNode;
}

export default function Window({
  id,
  title,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children
}: WindowProps) {
  const [isResizing, setIsResizing] = React.useState(false);
  const dragControls = useDragControls();

  if (!isOpen || isMinimized) return null;

  const windowContent = (
    <div 
      className={`w-full h-full glass overflow-hidden flex flex-col window-shadow ${!isMaximized ? 'rounded-lg' : ''}`}
      onPointerDown={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div className="h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 cursor-move shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] glow-text truncate max-w-37.5">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(id); }} 
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
          >
            <Minus size={14} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onMaximize(id); }}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
          >
            <Square size={10} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(id); }} 
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );

  if (isMaximized) {
    return (
      <div 
        style={{ zIndex, position: 'fixed', top: 0, left: 0, right: 0, bottom: 48 }}
        className="z-50 glass overflow-hidden flex flex-col"
        onPointerDown={() => onFocus(id)}
      >
        {/* HUD Corners (Maximized) */}
        <div className="hud-corner hud-corner-tl" />
        <div className="hud-corner hud-corner-tr" />
        <div className="hud-corner hud-corner-bl" />
        <div className="hud-corner hud-corner-br" />
        
        {/* Title Bar (Maximized) */}
        <div className="h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] glow-text truncate max-w-37.5">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onMinimize(id)} className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"><Minus size={14} /></button>
            <button onClick={() => onMaximize(id)} className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"><Square size={10} /></button>
            <button onClick={() => onClose(id)} className="w-6 h-6 flex items-center justify-center rounded hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"><X size={14} /></button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      drag={!isResizing}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      style={{ zIndex, position: 'absolute', top: '10%', left: '10%', overflow: 'visible' }}
      onPointerDown={() => onFocus(id)}
    >
      <Resizable
        defaultSize={window.innerWidth < 768 ? { width: '90vw', height: '70vh' } : { width: 600, height: 500 }}
        minWidth={280}
        minHeight={100}
        maxWidth="95vw"
        maxHeight="95vh"
        onResizeStart={() => setIsResizing(true)}
        onResizeStop={() => setIsResizing(false)}
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
        handleStyles={{
          bottomRight: {
            width: '24px',
            height: '24px',
            right: '0',
            bottom: '0',
            cursor: 'nwse-resize',
            background: 'linear-gradient(135deg, transparent 60%, rgba(34, 197, 94, 0.8) 60%)',
            borderRadius: '0 0 8px 0',
            zIndex: 100
          },
          right: { width: '16px', right: '-8px', cursor: 'ew-resize', zIndex: 100 },
          bottom: { height: '16px', bottom: '-8px', cursor: 'ns-resize', zIndex: 100 }
        }}
      >
        <div className="w-full h-full glass rounded-lg overflow-hidden flex flex-col window-shadow border border-white/10 relative">
          {/* HUD Corners */}
          <div className="hud-corner hud-corner-tl" />
          <div className="hud-corner hud-corner-tr" />
          <div className="hud-corner hud-corner-bl" />
          <div className="hud-corner hud-corner-br" />
          
          {/* Title Bar */}
          <div 
            className="h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 cursor-move shrink-0 select-none touch-none"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] glow-text truncate max-w-37.5">{title}</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); onMinimize(id); }} 
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
              >
                <Minus size={14} />
              </button>
              <button 
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); onMaximize(id); }}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
              >
                <Square size={10} />
              </button>
              <button 
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); onClose(id); }} 
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto relative">
            {children}
            {/* Visual Resize Indicator */}
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-green-500/30 pointer-events-none" />
          </div>
        </div>
      </Resizable>
    </motion.div>
  );
}
