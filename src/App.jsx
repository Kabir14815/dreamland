import Header from './components/Header.jsx'
import HeroScroll from './components/HeroScroll.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import WhyUs from './components/WhyUs.jsx'
import WhyInvest from './components/WhyInvest.jsx'
import Founder from './components/Founder.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import ConnectSection from './components/ConnectSection.jsx'
import Footer from './components/Footer.jsx'
import { ScrollReveal } from './hooks/useScrollReveal.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroScroll />
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
          <News />
        </ScrollReveal>
        <div className="contact-connect-row">
          <ConnectSection />
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
