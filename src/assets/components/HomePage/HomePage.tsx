import HomePageAbout from "./HomePageAbout";
import HomePageCTA from "./HomePageCTA";
import Footer from "../Footer";
import HomePageHero from "./HomePageHero";
import Navigation from "../Navigation";
import HomePageReviews from "./HomePageReviews";
import HomePageServices from "./HomePageServices";

function HomePage() {
  return(
    <div>
      <Navigation />
      <main>
        <HomePageHero />
        <HomePageServices />
        <HomePageAbout />
        <HomePageReviews />
        <HomePageCTA />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;
