import { AnimatePresence, motion } from 'framer-motion';
import { AudioLines, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { LOGIN_URL, navLinks } from '../data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToLogin = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-night-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2.5" aria-label="SMSound India home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-glow shadow-[0_0_20px_rgba(34,197,94,0.35)]">
            <AudioLines className="h-5 w-5 text-night-900" />
          </span>
          <span className="font-display text-xl font-bold text-white">
            SMSound <span className="text-glow">India</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-body transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-accent after:to-glow after:transition-all after:duration-300 hover:text-white hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" onClick={goToLogin}>
            Login
          </Button>
          <Button>Sign Up Free</Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-b border-white/[0.08] bg-night-900/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-body transition-colors hover:bg-white/5 hover:text-glow"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-white/[0.08] pt-4">
                <Button variant="outline" onClick={goToLogin} className="w-full">
                  Login
                </Button>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Sign Up Free
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
