export interface Plan {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  highlighted: boolean;
  cta: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'For new artists releasing their first tracks.',
    monthly: 9,
    yearly: 7,
    highlighted: false,
    cta: 'Start Free Trial',
    features: [
      'Unlimited audio releases',
      '150+ stores worldwide',
      'Keep 100% of your rights',
      'Basic stream analytics',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    description: 'For serious artists growing a global audience.',
    monthly: 19,
    yearly: 15,
    highlighted: true,
    cta: 'Go Professional',
    features: [
      'Everything in Starter',
      'Video distribution to Vevo',
      'YouTube monetization & Content ID',
      'Playlist pitching tools',
      'Real-time revenue analytics',
      'Priority 24/7 support',
    ],
  },
  {
    name: 'Label',
    description: 'For labels managing artists and large catalogs.',
    monthly: 49,
    yearly: 39,
    highlighted: false,
    cta: 'Talk to Sales',
    features: [
      'Everything in Professional',
      'Unlimited artists & sub-labels',
      'Royalty splits & payout management',
      'Rights management suite',
      'Bulk catalog migration',
      'Dedicated account manager',
    ],
  },
];
