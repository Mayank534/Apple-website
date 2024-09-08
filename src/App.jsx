import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import * as Sentry from '@sentry/react';
import Contact from './components/Contact';
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default Sentry.withProfiler(App);
