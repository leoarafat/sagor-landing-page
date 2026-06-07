import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import MusicDistribution from '../components/sections/MusicDistribution';
import VideoDistribution from '../components/sections/VideoDistribution';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HowItWorks from '../components/sections/HowItWorks';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import StoresGrid from '../components/sections/StoresGrid';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Support from '../components/sections/Support';
import CTA from '../components/sections/CTA';

export default function Landing() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <MusicDistribution />
      <VideoDistribution />
      <WhyChooseUs />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <StoresGrid />
      <Pricing />
      <FAQ />
      <Support />
      <CTA />
    </>
  );
}
