import { BarChart3, Globe, Infinity as InfinityIcon, ListMusic, Wallet, Zap, type LucideIcon } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const musicBenefits: Benefit[] = [
  { icon: Globe, title: 'Worldwide Distribution', description: 'Reach listeners in 120+ countries from a single release.' },
  { icon: Zap, title: 'Fast Release', description: 'Most releases are live on stores within 24–48 hours.' },
  { icon: Wallet, title: 'Royalty Tracking', description: 'Every stream and download mapped to your balance.' },
  { icon: BarChart3, title: 'Real Time Analytics', description: 'Streams, listeners, and territories updated daily.' },
  { icon: ListMusic, title: 'Playlist Opportunities', description: 'Pitch releases to editorial and algorithmic playlists.' },
  { icon: InfinityIcon, title: 'Unlimited Uploads', description: 'Release as many singles, EPs, and albums as you want.' },
];
