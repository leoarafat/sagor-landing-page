import { motion, useScroll } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import { useLenis } from './hooks/useLenis';
import Home from './pages/Home';
import KnowledgeBase from './pages/KnowledgeBase';
import HelpCenter from './pages/HelpCenter';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CopyrightPolicy from './pages/CopyrightPolicy';
import CookiePolicy from './pages/CookiePolicy';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  useLenis();
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-night-900">
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-glow to-accent"
      />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
