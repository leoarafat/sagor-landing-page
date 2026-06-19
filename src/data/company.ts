import { Facebook, Instagram, Linkedin, Youtube, type LucideIcon } from 'lucide-react';

export const COMPANY_INFO = {
  name: 'SMSound India',
  address: 'CA 170, 1B, Street No CA 209, Newtown, Kolkata, New Town, West Bengal, 700163, India',
  email: 'support@smsoundindia.com',
  web: 'https://smsoundindia.com',
  logo: 'https://res.cloudinary.com/SM Sound Indialeo/image/upload/v1745255616/logos_lzckz9.png',
};

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCgwkWKnt-rx2ThfiHIEKe5A', icon: Youtube },
  { label: 'Instagram', href: 'https://www.instagram.com/smsoundindia/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590414519924', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/smsound-india/', icon: Linkedin },
];
