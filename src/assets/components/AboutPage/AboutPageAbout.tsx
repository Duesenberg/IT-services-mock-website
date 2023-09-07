function AboutPageAbout () {
  return(
    <section>
      <div className="relative flex flex-col-reverse md:flex-row-reverse items-center bg-gray-900 bg-[url('./src/assets/images/graphy-dark.png')] bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-52 z-0 w-full bg-gradient-to-b from-pink-950 to-transparent opacity-40"
        ></div>
        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-52 z-0 w-full bg-gradient-to-t from-pink-950 to-transparent opacity-40"
        ></div>
        {/* Decorative Divs ^ */}

        {/* Images */}
        {/* <div className="relative md:flex-1 m-8 mb-0 mt-16 md:mt-0 w-4/5 h-72 md:h-96 md:mr-10 lg:mr-20" >
          <picture className="absolute block top-0 left-0 w-1/2 h-1/2"> */}
            {/* Mobile Image*/}
            {/* <source media="(max-width: 600px)" srcSet="src\assets\images\about-us-page-m.jpg" /> */}
            {/* Tablet and above Image */}
            {/* <source media="(min-width: 601px)" srcSet="src\assets\images\about-us-page.jpg" />
            <img loading="lazy" decoding="async" src="src\assets\images\about-us-page.jpg" alt="about us" width="640" height="427"
            className="absolute top-0 left-0 h-full w-full object-cover" />
          </picture> */}

          {/* <picture className="absolute block right-0 bottom-0 w-2/3 h-2/3"> */}
            {/* Mobile Image*/}
            {/* <source media="(max-width: 600px)" srcSet="src\assets\images\about-us-m.jpg" /> */}
            {/* Tablet and above Image */}
            {/* <source media="(min-width: 601px)" srcSet="src\assets\images\about-us.jpg" />
            <img loading="lazy" decoding="async" src="src\assets\images\about-us.jpg" alt="about us"  width="640" height="427"
            className="absolute top-0 left-0 h-full w-full object-cover border-8 border-solid border-gray-800" />
          </picture>
        </div> */}

        {/* What Sets Us Apart */}
        <div className="flex-1 px-6 py-8 md:px-10 md:py-16 xl:px-20 md:pl-0 z-10">
          <ul className="flex flex-col gap-8 items-center md:flex-row md:flex-wrap md:justify-around md:items-stretch z-10">
            <li className="about-us-card">
              <img src="src\assets\icons\star-svgrepo-com.svg" alt="star" aria-hidden="true" loading="lazy" decoding="async" 
              className="invert w-14 h-auto self-center" />
              <h3 className="about-us-card-title">Expertise</h3>
              <p className="about-us-card-text">
                From IT consulting and cybersecurity to software development and cloud solutions, we have the knowledge and skills to meet your unique needs.
              </p>
            </li>

            <li className="about-us-card">
              <img src="src\assets\icons\handshake-svgrepo-com.svg" alt="handshake" aria-hidden="true" loading="lazy" decoding="async" 
              className="invert w-14 h-auto self-center" />
              <h3 className="about-us-card-title">Client-Centric Approach</h3>
              <p className="about-us-card-text">
                We take the time to understand your business objectives and tailor our services to align with your goals. Your satisfaction is our ultimate measure of success.
              </p>
            </li>

            <li className="about-us-card">
              <img src="src\assets\icons\bulb-on-svgrepo-com.svg" alt="light bulb" aria-hidden="true" loading="lazy" decoding="async" 
              className="invert w-14 h-auto self-center" />
              <h3 className="about-us-card-title">Innovation</h3>
              <p className="about-us-card-text">
                Whether it's implementing cutting-edge software or optimizing your IT infrastructure, we are always exploring new ways to enhance your business.
              </p>
            </li>

            <li className="about-us-card">
              <img src="src\assets\icons\gear-svgrepo-com.svg" alt="gear" aria-hidden="true" loading="lazy" decoding="async" 
              className="invert w-14 h-auto self-center" />
              <h3 className="about-us-card-title">Reliability</h3>
              <p className="about-us-card-text">
                You can count on us to be there when you need us most. We provide responsive and proactive support, ensuring that your IT systems are running smoothly and securely.
              </p>
            </li>
          </ul>
        </div>

        {/* Description */}
        <div className="flex-1 relative">
          <div className="relative px-6 pt-8 z-10 flex flex-col gap-4 md:px-10 md:pt-16 xl:px-20">
            <span className="uppercase text-start text-sm text-gray-100 font-bold lg:text-base">ITBuddy</span>
            <h2 className="text-4xl text-left text-gray-100 font-bold lg:text-5xl">10+ Years of High Quality IT Services</h2>
          </div>

          <div className="relative z-10 items-center px-6 pb-8 flex flex-col gap-2 md:px-10 md:pb-16 xl:px-20">
            <p className="mt-8 mb-2 text-justify text-base text-gray-100 lg:text-lg">
              At ITBuddies, we are your trusted companions on the digital journey. With a passion for technology and a commitment to excellence, we have emerged as a premier IT company dedicated to solving your technology challenges and driving your business forward. 
            </p>

            <p className="mb-8 text-justify text-base text-gray-100 lg:text-lg">
              Our mission is to simplify the complex world of technology for businesses of all sizes. We understand that in today's fast-paced digital landscape, businesses need reliable and innovative IT solutions to stay competitive. Our goal is to be your partner in navigating this landscape, providing you with the tools and support you need to thrive.
            </p>

            <p className="mb-8 text-justify text-base text-gray-100 lg:text-lg">
              At ITBuddies, we believe that technology should be an enabler, not a hindrance. We are your IT partners, working together to achieve your business objectives. Join us on this exciting digital journey, and together, we'll navigate the ever-evolving IT landscape with confidence and success.
            </p>

            <a href="" 
            className="relative z-10 button-primary self-start">
              Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPageAbout;
