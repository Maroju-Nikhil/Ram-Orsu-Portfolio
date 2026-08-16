import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Journey } from '@/components/Journey';
import { Expertise } from '@/components/Expertise';
import { Philosophy } from '@/components/Philosophy';
import { Transformations } from '@/components/Transformations';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { Audience } from '@/components/Audience';
import { About } from '@/components/About';
import { DayInLife } from '@/components/DayInLife';
import { Testimonials } from '@/components/Testimonials';
import { Social } from '@/components/Social';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Expertise />
        <Philosophy />
        <Transformations />
        <Process />
        <Services />
        <Audience />
        <About />
        <DayInLife />
        <Testimonials />
        <Social />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
