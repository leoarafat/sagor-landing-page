import { BadgeCheck, Globe2, HandCoins, Headphones, HeartHandshake, LineChart, type LucideIcon } from 'lucide-react';

export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    icon: BadgeCheck,
    title: 'Fast Approval',
    description: 'Releases are reviewed by a real QC team and approved in hours, not weeks — so your release date is never at risk.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'From Kolkata to Los Angeles, your catalog lands on 150+ stores and 120+ countries with full metadata accuracy.',
  },
  {
    icon: HandCoins,
    title: 'Transparent Royalties',
    description: 'See exactly what each store paid, per track and per territory. No hidden cuts, no confusing statements.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Talk to humans who work in music distribution every day — by chat, email, or the help center, around the clock.',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Track streams, audience growth, and revenue trends with dashboards built for labels and independent artists.',
  },
  {
    icon: HeartHandshake,
    title: 'Artist Friendly',
    description: 'You keep 100% of your rights, your masters, and your creative control. We just handle the pipes.',
  },
];
