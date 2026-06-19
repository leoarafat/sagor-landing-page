export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Music Distribution', href: '#music-distribution' },
  { label: 'Video Distribution', href: '#video-distribution' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Support', href: '#support' },
];

export const LOGIN_URL = 'https://smsoundindia.com';
