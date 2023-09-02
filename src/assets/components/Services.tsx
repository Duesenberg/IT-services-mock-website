function Services() {
  return(
    <section>
      <div className="flex flex-col px-6 py-8 gap-10 bg-gray-900">
        <div className="flex flex-col gap-4">
          <span className="uppercase text-start text-sm text-gray-100 font-bold">What we Do</span>
          <h2 className="text-4xl text-left text-gray-100 font-bold">IT Services</h2>
        </div>
        
        <div className="flex flex-col gap-8 items-center">
          <a href="" className="service-card">
            <img src="src\assets\images\hire-team.jpg" alt="hire a team" 
            decoding="async" loading="lazy" aria-hidden='true' className="service-card-image" />

            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Hire an Independent Team</h3>
              <p className="service-card-info-text">Hire and work alongside an experienced and independent team, available 24/7.</p>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>

          <a href="" className="service-card">
            <img src="src\assets\images\hosting-maagement.jpg" alt="hosting and management" 
            decoding="async" loading="lazy" aria-hidden='true' className="service-card-image" />

            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Hosting and Website Management</h3>
              <p className="service-card-info-text">Choose one of our website management packages, which comes along with hosting.</p>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>

          <a href="" className="service-card">
            <img src="src\assets\images\support.jpg" alt="hire support" 
            decoding="async" loading="lazy" aria-hidden='true' className="service-card-image" />

            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">24/7 IT Support</h3>
              <p className="service-card-info-text">Get your own IT support team, available 24/7 to assist your team with whatever issue they are having.</p>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>

          <a href="" className="service-card">
            <img src="src\assets\images\webdev-team.jpg" alt="hire a team" 
            decoding="async" loading="lazy" aria-hidden='true' className="service-card-image" />

            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Design, Development & SEO</h3>
              <p className="service-card-info-text">Let us do the heavy lifting. Hire a team consisting of Designers, Developers, SEO Experts, DevOps Engineers, and other experienced individuals who will make your project come to life.</p>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services;
