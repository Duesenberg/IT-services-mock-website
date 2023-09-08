import CallToAction from "../CallToAction";
import Footer from "../Footer";
import Navigation from "../Navigation";
import AboutPageAbout from "./AboutPageAbout";
import AboutPageHero from "./AboutPageHero";
import AboutPageStats from "./AboutPageStats";

function AboutPage () {
  return(
    <div id="about-page">
      <Navigation />
      <main>
        <AboutPageHero />
        <AboutPageAbout />
        <AboutPageStats />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage;
