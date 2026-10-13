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
    <div className="min-h-screen bg-charcoal-950 text-cream">
      <Header />
      <main>
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
  )
}

export default App
