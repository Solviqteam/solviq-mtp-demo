import { MotionConfig } from 'framer-motion'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SignatureDishes } from '@/components/SignatureDishes'
import { Menu } from '@/components/Menu'
import { OurStory } from '@/components/OurStory'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Locations } from '@/components/Locations'
import { Enquiry } from '@/components/Enquiry'
import { Gallery } from '@/components/Gallery'
import { Footer } from '@/components/Footer'
import { DemoNotice } from '@/components/DemoNotice'

function App() {
  return (
    // reducedMotion="user" makes Framer Motion honour the OS "reduce motion" setting.
    // The CSS media query alone does not affect JS-driven animations.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-charcoal-950 text-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-copper focus:px-4 focus:py-2 focus:text-charcoal-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <SignatureDishes />
          <Menu />
          <WhyChooseUs />
          <OurStory />
          <Locations />
          <Gallery />
          <Enquiry />
        </main>
        <Footer />
        <DemoNotice />
      </div>
    </MotionConfig>
  )
}

export default App
