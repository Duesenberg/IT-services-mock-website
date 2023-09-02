import AboutUs from "./assets/components/AboutUs";
import Hero from "./assets/components/Hero";
import Navigation from "./assets/components/Navigation";
import Services from "./assets/components/Services";

export default function App () {
  return(
    <div>
      <Navigation />
      <Hero />
      <Services />
      <AboutUs />
    </div>
  )
}
