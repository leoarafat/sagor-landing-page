import { Rocket, Send, Store, UploadCloud, type LucideIcon } from 'lucide-react';

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const steps: Step[] = [
  { icon: UploadCloud, title: 'Upload Music', description: 'Drop your audio or video, cover art, and metadata into the dashboard.' },
  { icon: Store, title: 'Choose Stores', description: 'Select all 150+ stores or hand-pick the platforms that matter to you.' },
  { icon: Send, title: 'Submit Release', description: 'Set a release date, add credits and lyrics, and submit for review.' },
  { icon: Rocket, title: 'Go Live Worldwide', description: 'Your release goes live everywhere — and royalties start tracking.' },
];
