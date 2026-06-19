import { BadgeCheck, BookOpen, Clapperboard, Coins, Globe2, ShieldCheck, Store, Youtube, type LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Coins,
    title: 'Sell Your Music',
    description: 'Put your tracks on sale across every major store and keep 100% of your rights while royalties flow straight to your wallet.',
  },
  {
    icon: BookOpen,
    title: 'Music Publishing',
    description: 'Register your compositions worldwide and collect publishing royalties from radio, TV, streaming, and live performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Rights Management',
    description: 'Protect your catalog with content ID, claim resolution, and ownership tracking across every platform you release on.',
  },
  {
    icon: Youtube,
    title: 'YouTube Monetization',
    description: 'Turn every view into revenue. We claim, track, and monetize your official videos and user-generated content on YouTube.',
  },
  {
    icon: Store,
    title: 'Digital Stores',
    description: 'One upload reaches 150+ stores — Spotify, Apple Music, Amazon, JioSaavn, TikTok, and every platform your fans use.',
  },
  {
    icon: Globe2,
    title: 'Music Distribution',
    description: 'Schedule a release date, pick your stores, and go live worldwide with pre-save links and playlist pitching included.',
  },
  {
    icon: Clapperboard,
    title: 'Video Distribution',
    description: 'Deliver official music videos to Vevo, Apple Music, and social platforms with broadcast-grade encoding handled for you.',
  },
  {
    icon: BadgeCheck,
    title: 'YouTube Official Artist Channel (OAC)',
    description:
      'Get your Official Artist Channel on YouTube and merge all eligible artist channels into one verified artist profile with a music note badge, official releases, and enhanced artist features.',
  },
];
