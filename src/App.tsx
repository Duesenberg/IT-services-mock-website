import AboutUs from "./assets/components/AboutUs";
import CallToAction from "./assets/components/CallToAction";
import Hero from "./assets/components/Hero";
import Navigation from "./assets/components/Navigation";
import Reviews from "./assets/components/Reviews";
import Services from "./assets/components/Services";

export default function App () {
  return(
    <div>
      <Navigation />
      <Hero />
      <Services />
      <AboutUs />
      <Reviews />
      <CallToAction />
    </div>
  )
}
