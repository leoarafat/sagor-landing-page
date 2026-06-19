import CtaBanner from '../sections/CtaBanner';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import MusicDistribution from '../sections/MusicDistribution';
import Pricing from '../sections/Pricing';
import Services from '../sections/Services';
import Stats from '../sections/Stats';
import StoresGrid from '../sections/StoresGrid';
import Support from '../sections/Support';
import Testimonials from '../sections/Testimonials';
import TrustedBy from '../sections/TrustedBy';
import VideoDistribution from '../sections/VideoDistribution';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function Home() {
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
      <Faq />
      <Support />
      <CtaBanner />
    </>
  );
}
