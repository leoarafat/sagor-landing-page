import { AudioLines, Mail, MapPin, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, socialLinks } from '../data/company';
import { LOGIN_URL } from '../data/navigation';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Support', href: '#support' },
  { label: 'Login', href: LOGIN_URL },
];

const serviceLinks = [
  { label: 'Music Distribution', href: '#music-distribution' },
  { label: 'Video Distribution', href: '#video-distribution' },
  { label: 'YouTube Monetization', href: '#services' },
  { label: 'Rights Management', href: '#services' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms-of-service', internal: true },
  { label: 'Privacy Policy', href: '/privacy-policy', internal: true },
  { label: 'Copyright Policy', href: '/copyright-policy', internal: true },
  { label: 'Cookie Policy', href: '/cookie-policy', internal: true },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-night-800">
      <div className="container-x py-16">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/[0.08] bg-card/60 p-8 backdrop-blur lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Stay in the loop</h3>
            <p className="mt-2 text-sm text-body">Release tips, store updates, and royalty news — once a month, no spam.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@artistname.com"
              className="h-12 w-full rounded-full border border-white/10 bg-night-900/70 px-5 text-sm text-white placeholder:text-body/50 focus:border-accent/60 focus:outline-none"
            />
            <button
              type="submit"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-night-900 transition-all hover:bg-glow hover:shadow-[0_0_24px_rgba(52,211,153,0.45)]"
              aria-label="Subscribe to newsletter"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          {subscribed ? <p className="text-sm font-medium text-glow">Subscribed — welcome aboard.</p> : null}
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-glow">
                <AudioLines className="h-5 w-5 text-night-900" />
              </span>
              <span className="font-display text-xl font-bold text-white">
                SMSound <span className="text-glow">India</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              Music and video distribution for independent artists and labels. 150+ stores, 120+ countries, your rights
              kept — always.
            </p>

            <div className="mt-5 space-y-2.5 text-sm text-body">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-glow" />
                <span className="max-w-xs">{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-glow" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="transition-colors hover:text-glow">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${COMPANY_INFO.name} on ${social.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-body transition-all hover:border-accent/50 hover:text-glow"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { heading: 'Quick Links', links: quickLinks },
            { heading: 'Services', links: serviceLinks },
            { heading: 'Legal', links: legalLinks },
          ].map((column) => (
            <div key={column.heading}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{column.heading}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => {
                  const isInternal = 'internal' in link && link.internal;
                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <Link to={link.href} className="text-sm text-body transition-colors hover:text-glow">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-sm text-body transition-colors hover:text-glow">
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-body/70">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <a href={COMPANY_INFO.web} className="text-xs text-body/70 transition-colors hover:text-glow">
            {COMPANY_INFO.web.replace('https://', '')}
          </a>
        </div>
      </div>
    </footer>
  );
}
