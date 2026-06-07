import { useState, type FormEvent } from 'react';
import { Twitter, Instagram, Youtube, Facebook, Linkedin, ArrowRight, Check } from 'lucide-react';
import Logo from '../ui/Logo';

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how' },
  { label: 'Blog', href: '#' },
];

const serviceLinks = [
  { label: 'Music Distribution', href: '#music-distribution' },
  { label: 'Video Distribution', href: '#video-distribution' },
  { label: 'Music Publishing', href: '#services' },
  { label: 'YouTube Monetization', href: '#services' },
  { label: 'Rights Management', href: '#services' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'DMCA', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-bg-900/60 backdrop-blur-xl">
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              SM Sound India is the all-in-one music & video distribution platform — built for independent artists, producers and labels who want to keep 100% of their rights and royalties.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Newsletter</p>
              <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email for newsletter"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-muted/70 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent-glow px-4 py-2 text-xs font-semibold text-bg-950 transition-transform hover:scale-105"
                >
                  {submitted ? <><Check className="h-4 w-4" /> Sent</> : <>Subscribe <ArrowRight className="h-4 w-4" /></>}
                </button>
              </div>
              <p className="mt-2 text-xs text-muted">Monthly drops on royalty trends, releases and platform updates.</p>
            </form>
          </div>

          <FooterCol title="Quick Links" links={quickLinks} className="lg:col-span-2" />
          <FooterCol title="Services" links={serviceLinks} className="lg:col-span-3" />
          <FooterCol title="Legal" links={legalLinks} className="lg:col-span-3" />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} SM Sound India Pvt. Ltd. All rights reserved. Made for artists.
          </p>
          <div className="flex items-center gap-2">
            {[
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Youtube, label: 'YouTube' },
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className = '',
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-white/80 transition-colors hover:text-accent-glow"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
