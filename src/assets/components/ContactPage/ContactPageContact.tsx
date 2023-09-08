function ContactPageContact() {
  return(
    <section>
      <div className="flex flex-col px-6 py-8 gap-10 bg-gray-900 relative md:px-10 md:py-16 xl:px-20 bg-[url('./src/assets/images/graphy-dark.png')] bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-pink-950 to-transparent opacity-40"
        ></div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-96 z-0 w-full bg-gradient-to-t from-pink-950 to-transparent opacity-40"
        ></div>
        {/* Decorative Divs ^ */}
        
        <div className="z-10 flex flex-col items-center gap-10 xl:flex-row xl:justify-center xl:items-stretch">
          {/* Form */}
          <form action="" name="Contact Form" className="flex flex-col max-w-sm md:max-w-lg xl:max-w-xl xl:flex-1">
            <div>
              <div className="relative px-6 pt-8 z-10 flex flex-col gap-4">
                <span className="uppercase text-start text-sm text-gray-100 font-bold lg:text-base">Contact</span>
                <h2 className="text-4xl text-left text-gray-100 font-bold lg:text-5xl">Hit Us Up</h2>
              </div>

              <div className="relative z-10 items-center px-6 pb-8 flex flex-col gap-2">
                <p className="mt-8 mb-2 text-justify text-base text-gray-100 lg:text-lg">
                  Call us or write us an e-mail, we would be happy to get in touch and answer any questions. 
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              <label htmlFor="name" className="form-label">
                Name
                <input required type="text" name="name" id="name" 
                placeholder="Name" className="form-input" />
              </label>

              <label htmlFor="email" className="form-label">
                E-mail
                <input required type="email" name="email" id="email" 
                placeholder="E-mail" className="form-input" />
              </label>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              <label htmlFor="phone" className="form-label">
                Phone
                <input required type="tel" name="phone" id="phone" 
                placeholder="Phone" className="form-input" />
              </label>

              <label htmlFor="industry" className="form-label">
                Industry
                <input required type="text" name="industry" id="industry" 
                placeholder="e.g. Insurance..." className="form-input" />
              </label>
            </div>

            <label htmlFor="message" className="form-label">
              Message
              <textarea required name="message" id="message" cols={30} rows={3} 
              placeholder="Write message..." className="form-input"></textarea>
            </label>

            <button type="submit" className="relative z-10 button-primary self-center">
              Submit</button>
          </form>

          {/* Other half of section */}
          <div className="relative bg-gray-950 bg-opacity-60 overflow-hidden w-full rounded-lg max-w-sm md:max-w-lg xl:max-w-xl hover:bg-opacity-80 transition-all duration-500 shadow-sm shadow-gray-950 xl:my-14">
            <ul className="flex flex-col px-6 py-8 gap-10 items-start w-full">
              <li className="flex gap-6 items-center w-2/3 max-w-xs md:w-full md:max-w-full">
                  <div className="flex flex-col gap-1 items-start">
                    <span className="uppercase text-start text-lg text-gray-100 font-bold">Contact</span>
                    <a href="tel:012-345-6789" className="footer-nav-link">(012) 345-6789</a>
                    <a href="mailto:info@itbuddies.com" className="footer-nav-link">info@itbuddies.com</a>
                  </div>
              </li>

              <li className="flex gap-6 items-center w-2/3 max-w-xs md:w-full md:max-w-full">
                  <div className="flex flex-col gap-1 items-start">
                    <span className="uppercase text-start text-lg text-gray-100 font-bold">Address</span>
                    <a href="" className="footer-nav-link" target="_blank">Los Angeles, CA</a>
                  </div>
              </li>

              <li className="flex gap-6 items-center w-2/3 max-w-xs md:w-full md:max-w-full">
                  <div className="flex flex-col gap-1 items-start">
                    <span className="uppercase text-start text-lg text-gray-100 font-bold">Open Hours</span>
                    <span className="footer-nav-link">Monday To Friday</span>
                    <span className="footer-nav-link">8:00 AM - 5:00 PM</span>
                  </div>
              </li>
            </ul>

            <picture className="absolute top-0 left-0 -z-10 h-full">
              <source media="(max-width: 600px)" srcSet="src\assets\images\contact-m.jpg" />

              <source media="(min-width: 601px)" srcSet="src\assets\images\contact.jpg" />

              <img loading="lazy" decoding="async" src="src\assets\images\contact.jpg" 
              alt="contact" aria-hidden="true" width="2250" height="1500"
              className="object-cover h-full" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPageContact;
