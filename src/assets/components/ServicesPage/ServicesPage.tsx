import CallToAction from "../CallToAction";
import Footer from "../Footer";
import Navigation from "../Navigation";
import ServicesPageHero from "./ServicesPageHero";
import ServicesPageServices from "./ServicesPageServices";

function ServicesPage() {
  return(
    <div id="services-page">
      <Navigation />
      <main>
        <ServicesPageHero />
        <ServicesPageServices />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage;
