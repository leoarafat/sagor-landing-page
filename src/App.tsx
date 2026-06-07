import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './pages/Landing';
import BackgroundFX from './components/ui/BackgroundFX';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-950 text-white">
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
