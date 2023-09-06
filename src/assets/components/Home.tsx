import AboutUs from "./AboutUs";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Reviews from "./Reviews";
import Services from "./Services";

function Home() {
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

export default Home;
