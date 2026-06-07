import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import useScrolled from '../../hooks/useScrolled';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Music Distribution', href: '#music-distribution' },
  { label: 'Video Distribution', href: '#video-distribution' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Support', href: '#support' },
];

const LOGIN_URL = 'https://smsoundindia.com';

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.08] bg-bg-950/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={handleLogin}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-accent-glow"
            >
              Login
            </button>
            <a href="#pricing" className="btn-primary text-sm">
              Sign Up Free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-bg-950/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl border border-white/10 bg-card/95 p-6 shadow-card backdrop-blur-2xl"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                ))}
              </nav>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <button onClick={handleLogin} className="btn-ghost text-sm">
                  Login
                </button>
                <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary text-sm">
                  Sign Up Free
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
