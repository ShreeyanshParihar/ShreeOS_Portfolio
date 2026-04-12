export type WindowId = 'terminal' | 'resume' | 'experience' | 'projects' | 'skills' | 'contact' | 'dashboard' | 'core-ai' | 'certifications';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface AppIcon {
  id: WindowId;
  title: string;
  icon: string;
}
