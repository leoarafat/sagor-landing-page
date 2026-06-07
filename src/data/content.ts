import {
  Music2,
  BookOpen,
  ShieldCheck,
  Youtube,
  Store,
  Disc3,
  Video,
  Globe2,
  Rocket,
  LineChart,
  BarChart3,
  ListMusic,
  UploadCloud,
  Headphones,
  Zap,
  Wallet,
  Users,
  Sparkles,
  HeartHandshake,
  Mail,
  MessagesSquare,
  LifeBuoy,
  Library,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Music2,
    title: 'Sell Your Music',
    description:
      'Distribute singles, EPs and albums to every major store and keep 100% of your royalties — no hidden fees.',
  },
  {
    icon: BookOpen,
    title: 'Music Publishing',
    description:
      'Collect mechanical, performance and sync royalties from 200+ collection societies worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Rights Management',
    description:
      'Protect your sound recordings with global content ID, copyright registration and takedown support.',
  },
  {
    icon: Youtube,
    title: 'YouTube Monetization',
    description:
      'Claim and monetize every use of your music across YouTube with our certified CMS partner network.',
  },
  {
    icon: Store,
    title: 'Digital Stores',
    description:
      'Deliver to 150+ DSPs including Spotify, Apple Music, TikTok, Amazon Music and regional giants.',
  },
  {
    icon: Disc3,
    title: 'Music Distribution',
    description:
      'Fast-track release pipelines with smart scheduling, pre-saves and editorial pitching tools built-in.',
  },
  {
    icon: Video,
    title: 'Video Distribution',
    description:
      'Push official videos to YouTube, Vevo, Apple Music Video and short-form platforms in one upload.',
  },
];

export const distributionBenefits = [
  {
    icon: Globe2,
    title: 'Worldwide Distribution',
    description: 'Reach 150+ stores in 120+ countries with a single release.',
  },
  {
    icon: Rocket,
    title: 'Fast Release',
    description: 'Go live on most platforms in under 24 hours with priority delivery.',
  },
  {
    icon: Wallet,
    title: 'Royalty Tracking',
    description: 'Daily-updated dashboards with per-store, per-territory breakdowns.',
  },
  {
    icon: LineChart,
    title: 'Real Time Analytics',
    description: 'Stream counts, saves and audience demographics — refreshed every hour.',
  },
  {
    icon: ListMusic,
    title: 'Playlist Opportunities',
    description: 'Pitch to editorial curators and our partner playlist network.',
  },
  {
    icon: UploadCloud,
    title: 'Unlimited Uploads',
    description: 'Release as many tracks as you want — no per-song caps, ever.',
  },
];

export const videoPlatforms = [
  { name: 'YouTube', tag: 'Official Artist Channel' },
  { name: 'Vevo', tag: 'Verified Premium' },
  { name: 'Apple Music Video', tag: 'HD + Spatial' },
  { name: 'Facebook', tag: 'Reels & Watch' },
  { name: 'Instagram', tag: 'Reels Library' },
  { name: 'TikTok', tag: 'Sounds & Effects' },
];

export const whyChooseUs = [
  { icon: Zap, title: 'Fast Approval', description: 'AI-assisted QC pushes releases to stores in record time.' },
  { icon: Globe2, title: 'Global Reach', description: '150+ DSPs across 120+ countries, fully localized metadata.' },
  { icon: Wallet, title: 'Transparent Royalties', description: 'Cent-level reporting with daily updates and instant payouts.' },
  { icon: Headphones, title: '24/7 Support', description: 'Real human artist managers, available around the clock.' },
  { icon: BarChart3, title: 'Advanced Analytics', description: 'See where your fans are listening, saving and sharing.' },
  { icon: HeartHandshake, title: 'Artist Friendly', description: 'Keep 100% rights. No lock-in. Cancel anytime, royalties yours forever.' },
];

export const howSteps = [
  { step: '01', title: 'Upload Music', description: 'Drop your masters, artwork and lyrics into our smart uploader.' },
  { step: '02', title: 'Choose Stores', description: 'Pick from 150+ DSPs and set a release date, country by country.' },
  { step: '03', title: 'Submit Release', description: 'Our QC team verifies metadata, audio quality and rights.' },
  { step: '04', title: 'Go Live Worldwide', description: 'Track streams, royalties and chart positions in real time.' },
];

export const statsData = [
  { value: 50000, suffix: '+', label: 'Artists', icon: Users },
  { value: 150, suffix: '+', label: 'Platforms', icon: Store },
  { value: 120, suffix: '+', label: 'Countries', icon: Globe2 },
  { value: 1, suffix: 'B+', label: 'Streams', icon: Sparkles },
];

export const testimonials = [
  {
    name: 'Amara Okafor',
    role: 'Afrobeat Artist · Lagos',
    avatar: 'AO',
    text: 'SM Sound India got my single on Spotify editorial in 11 days. Royalties hit my account before the month ended.',
    rating: 5,
  },
  {
    name: 'Diego Martinez',
    role: 'Reggaeton Producer · Medellín',
    avatar: 'DM',
    text: 'The analytics dashboard is on another level. I can see which TikTok edit is driving streams in real time.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Indie Singer · Mumbai',
    avatar: 'PS',
    text: 'I switched from a big-name distributor and immediately saw faster payouts and cleaner reporting.',
    rating: 5,
  },
  {
    name: 'Leo Chen',
    role: 'Label Owner · Berlin',
    avatar: 'LC',
    text: 'We run 40+ releases a month on the Label plan. Bulk uploads and split sheets save us days of admin.',
    rating: 5,
  },
  {
    name: 'Zara Hassan',
    role: 'R&B Vocalist · London',
    avatar: 'ZH',
    text: 'Their YouTube monetization caught usages I never knew existed. Found money, literally.',
    rating: 5,
  },
  {
    name: 'Kenji Watanabe',
    role: 'Lo-Fi Producer · Tokyo',
    avatar: 'KW',
    text: 'Pre-saves, Apple Music shazam links, smart links — it’s a full marketing suite, not just distribution.',
    rating: 5,
  },
];

export const stores = [
  'Spotify',
  'Apple Music',
  'YouTube Music',
  'TikTok',
  'Amazon Music',
  'Deezer',
  'Tidal',
  'Pandora',
  'JioSaavn',
  'Gaana',
  'Wynk',
  'Boomplay',
  'Audiomack',
  'Napster',
  'Shazam',
  'iHeartRadio',
  'Anghami',
  'NetEase',
];

export const trustedLogos = [
  'Spotify',
  'Apple Music',
  'YouTube Music',
  'TikTok',
  'Amazon Music',
  'Deezer',
  'JioSaavn',
  'Gaana',
  'Wynk',
];

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for first-time artists testing the waters.',
    monthly: 9,
    yearly: 79,
    features: [
      'Unlimited single releases',
      'Distribution to 150+ stores',
      '85% royalty share',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For serious independent artists ready to scale.',
    monthly: 19,
    yearly: 169,
    features: [
      'Unlimited singles, EPs & albums',
      'Distribution + Video Distribution',
      '100% royalty share',
      'Advanced analytics & playlist pitching',
      'YouTube monetization',
      'Priority 24/7 support',
    ],
    cta: 'Go Professional',
    highlighted: true,
  },
  {
    name: 'Label',
    description: 'For labels, managers and multi-artist rosters.',
    monthly: 49,
    yearly: 449,
    features: [
      'Unlimited artists & releases',
      'Full publishing administration',
      '100% royalty share',
      'Split payments & accounting',
      'Dedicated account manager',
      'Custom API access',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
];

export const faqs = [
  {
    q: 'How long until my music appears on streaming platforms?',
    a: 'Most releases go live within 24–48 hours. Spotify and Apple Music typically take 1–3 business days, while smaller regional DSPs may take up to 7 days.',
  },
  {
    q: 'Do I keep 100% of the rights to my music?',
    a: 'Always. You own your masters, publishing and every cent of your royalties. We never claim ownership of your work — we only act as your delivery partner.',
  },
  {
    q: 'How much does SM Sound India cost?',
    a: 'Plans start at $9/month with unlimited single releases. The Professional plan at $19/month covers most independent artists, and label plans start at $49/month.',
  },
  {
    q: 'When and how do I get paid?',
    a: 'Royalties are reported daily and paid out monthly via PayPal, Wise, bank transfer or USDC. There is no minimum payout threshold on Professional and Label plans.',
  },
  {
    q: 'Can I distribute cover songs?',
    a: 'Yes. We handle mechanical licensing for covers automatically in supported territories — you only need to provide the original songwriter credits.',
  },
  {
    q: 'Do you support video distribution to YouTube and Vevo?',
    a: 'Absolutely. Professional and Label plans include video delivery to YouTube Official Artist Channel, Vevo, Apple Music Video, TikTok, Reels and more.',
  },
  {
    q: 'What audio formats do you accept?',
    a: 'We accept WAV (16/24-bit) and FLAC files at 44.1 kHz or higher. Our QC team checks every upload for loudness, clipping and metadata accuracy.',
  },
  {
    q: 'Can I pitch my song to Spotify editorial playlists?',
    a: 'Yes. Submit your track at least 7 days before release through our pitching tool, which forwards directly to Spotify, Apple Music and Amazon curators.',
  },
  {
    q: 'Do you offer split payments between collaborators?',
    a: 'Of course. Set up unlimited splits per track — featured artists, producers, songwriters — and we pay each contributor directly.',
  },
  {
    q: 'Can I take down a release at any time?',
    a: 'Yes. You can request takedowns from your dashboard, and we process them within 48 hours across all stores.',
  },
];

export const supportChannels = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Reach our artist success team at any time.',
    value: 'support@smsoundindia.com',
  },
  {
    icon: MessagesSquare,
    title: 'Live Chat',
    description: 'Talk to a real human in under 60 seconds.',
    value: 'Available 24/7',
  },
  {
    icon: LifeBuoy,
    title: 'Help Center',
    description: '500+ guides, tutorials and best-practice playbooks.',
    value: 'help.smsoundindia.com',
  },
  {
    icon: Library,
    title: 'Knowledge Base',
    description: 'Deep-dive articles on royalties, rights and marketing.',
    value: 'kb.smsoundindia.com',
  },
];
