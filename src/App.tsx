import AboutUs from "./assets/components/AboutUs";
import CallToAction from "./assets/components/CallToAction";
import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Navigation from "./assets/components/Navigation";
import Reviews from "./assets/components/Reviews";
import Services from "./assets/components/Services";

export default function App () {
  return(
    <div>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
