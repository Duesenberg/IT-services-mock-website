import Footer from "../Footer";
import Navigation from "../Navigation";
import ContactPageContact from "./ContactPageContact";
import ContactPageHero from "./ContactPageHero";

function ServicesPage() {
  return(
    <div id="contact-page">
      <Navigation />
      <main>
        <ContactPageHero />
        <ContactPageContact />
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage;
