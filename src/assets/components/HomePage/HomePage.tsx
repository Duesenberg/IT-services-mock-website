import HomePageAbout from "./HomePageAbout";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import HomePageHero from "./HomePageHero";
import Navigation from "../Navigation";
import HomePageReviews from "./HomePageReviews";
import HomePageServices from "./HomePageServices";

function HomePage() {
  return(
    <div id="home-page">
      <Navigation />
      <main>
        <HomePageHero />
        <HomePageServices />
        <HomePageAbout />
        <HomePageReviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;
