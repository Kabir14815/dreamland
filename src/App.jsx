import Header from './components/Header.jsx'
import HeroSlider from './components/HeroSlider.jsx'
import TrustBar from './components/TrustBar.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import WhyUs from './components/WhyUs.jsx'
import WhyInvest from './components/WhyInvest.jsx'
import Founder from './components/Founder.jsx'
import Reviews from './components/Reviews.jsx'
import Gallery from './components/Gallery.jsx'
import News from './components/News.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import { ScrollReveal } from './hooks/useScrollReveal.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <TrustBar />
        <FeaturedProjects />
        <ScrollReveal>
          <WhyUs />
        </ScrollReveal>
        <ScrollReveal>
          <WhyInvest />
        </ScrollReveal>
        <ScrollReveal>
          <Founder />
        </ScrollReveal>
        <ScrollReveal>
          <Reviews />
        </ScrollReveal>
        <ScrollReveal>
          <Gallery />
        </ScrollReveal>
        <ScrollReveal>
          <News />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
