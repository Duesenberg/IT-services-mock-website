import quoteIcon from '../../icons/quote-left-svgrepo-com.svg';

function HomePageServices() {
  return(
    <section>
      <div id="homePageServices" className="flex flex-col px-6 py-8 gap-10 bg-gray-100 dark:bg-gray-900 relative md:px-10 md:py-16 xl:px-20 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-sky-500 dark:from-pink-950 to-transparent"
        ></div>
        <div className="absolute top-0 left-0 h-56 z-0 w-full bg-sky-500 dark:bg-sky-950"
        ></div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-96 z-0 w-full bg-gradient-to-t  from-sky-500 dark:from-pink-950 to-transparent"
        ></div>
        <div className="absolute bottom-0 left-0 h-56 z-0 w-full bg-sky-500 dark:bg-sky-950"
        ></div>
        {/* Decorative Divs ^ */}
        
        <ul className="flex flex-col gap-8 items-center md:flex-row md:flex-wrap md:justify-around md:items-stretch z-10">
          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Excellent communication</h3>
            <p className="service-card-text">
              Had a superb experience with the folks at ITBuddy. They value communication and were available 24/7, they are very professional. I highly reccomend their services!
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Steven</span>
              <span className="service-card-person-title">Project Manager</span>
            </div>
          </li>
          
          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Very fast and efficient</h3>
            <p className="service-card-text">
              Hired ITBuddies for a project that was due in a few days. Had the job done the next day, which I never expected. They had the project done very quickly, and with high quality as well. Highly recommend.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Alison</span>
              <span className="service-card-person-title">Startup Owner</span>
            </div>
          </li>

          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Exceptionally Quick Turnaround</h3>
            <p className="service-card-text">
              I needed urgent assistance with a critical IT issue, and ITBuddies came to the rescue! They resolved my problem with lightning speed, exceeding my expectations. Their team's efficiency and expertise are truly commendable. I'm grateful for their prompt service.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Mark</span>
              <span className="service-card-person-title">Small Business Owner</span>
            </div>
          </li>

          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Reliable and Responsive</h3>
            <p className="service-card-text">
              ITBuddies has been our trusted IT partner for years now. Their team consistently delivers fast and efficient solutions to our technology challenges. Whenever we encounter an issue, they respond promptly and resolve it effectively. We rely on their expertise, and they never disappoint.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Samantha</span>
              <span className="service-card-person-title">Corporate Manager</span>
            </div>
          </li>

          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Expertise at its Best</h3>
            <p className="service-card-text">
              We've engaged ITBuddies for several IT projects, and they've consistently demonstrated their prowess in the field. Their ability to deliver high-quality results swiftly is remarkable. We appreciate their technical proficiency and recommend their services to anyone seeking top-notch IT support.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">David</span>
              <span className="service-card-person-title">Entrepreneur</span>
            </div>
          </li>

          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Dependable IT Support</h3>
            <p className="service-card-text">
              ITBuddies has been an invaluable asset to our business. Their swift response to our IT needs has kept our operations running smoothly. They consistently go above and beyond to ensure our systems are secure and efficient. We can't thank them enough for their dedication.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Emily</span>
              <span className="service-card-person-title">Business Owner</span>
            </div>
          </li>

          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Timely Solutions with a Smile</h3>
            <p className="service-card-text">
              ITBuddies not only provides fast and efficient IT services but does so with a smile. Their team is always eager to assist, and they make complex technical issues seem like a breeze. We appreciate their cheerful demeanor and their ability to resolve our IT problems promptly.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Jason</span>
              <span className="service-card-person-title">IT Manager</span>
            </div>
          </li>

          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Rapid Problem Solvers</h3>
            <p className="service-card-text">
              Our company faced a critical IT crisis, and ITBuddies was our savior. They swooped in, diagnosed the issue in no time, and had our systems up and running within hours. Their speed and expertise saved us from potential disaster. We can't thank them enough for their exceptional service.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Sarah</span>
              <span className="service-card-person-title">Operations Director</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HomePageServices;
