function Reviews() {
  return(
    <section>
      <div className="flex flex-col px-6 py-8 gap-10 bg-gray-900">
        <div className="flex flex-col gap-4">
          <span className="uppercase text-start text-sm text-gray-100 font-bold">Reviews</span>
          <h2 className="text-4xl text-left text-gray-100 font-bold">What our customers think</h2>
          <p className="text-base text-justify text-gray-100">
            Below are some of the reviews from our customers. Check them out and see what the people we have worked with have to say about our services.
          </p>
        </div>
        <ul className="flex flex-col gap-8 items-center">
          <li className="review-card">
            <img src="src\assets\icons\quote-left-svgrepo-com.svg" alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="invert w-20 h-auto self-end" />
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
            <img src="src\assets\icons\quote-left-svgrepo-com.svg" alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Very fast and efficient</h3>
            <p className="service-card-text">
              Hired ITBuddies for a project that was due in a few days. Had the job done the next day, which I never expected. They had the project done very quickly, and with high quality as well. Highly recommend.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Alison</span>
              <span className="service-card-person-title">Startup Owner</span>
            </div>
          </li>

          <a href="" 
          className="self-start text-gray-100 p-4 text-l text-center uppercase font-bold bg-gray-500 rounded-md hover:bg-gray-400 transition-colors duration-200">
            Read more reviews</a>
        </ul>
      </div>
    </section>
  )
}

export default Reviews;
