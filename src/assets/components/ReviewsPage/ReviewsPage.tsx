import CallToAction from "../CallToAction";
import Footer from "../Footer";
import ReviewsPageReviews from "./ReviewsPageReviews";
import Navigation from "../Navigation";
import ReviewsPageHero from "./ReviewsPageHero";

function ServicesPage() {
  return(
    <div>
      <Navigation />
      <main>
        <ReviewsPageHero />
        <ReviewsPageReviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage;
