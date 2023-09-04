function AboutUs() {
  return(
    <section>
      <div className="">
        <picture className="">
          {/* Mobile Image*/}
          <source media="(max-width: 600px)" srcSet="src\assets\images\about-us-m.jpg" />
          {/* Tablet and above Image */}
          <source media="(min-width: 601px)" srcSet="src\assets\images\about-us.jpg" />
          <img loading="lazy" decoding="async" src="src\assets\images\about-us.jpg" alt="about us" />
        </picture>

        <div className="px-6 pt-8 bg-gray-800 flex flex-col gap-4">
          <span className="uppercase text-start text-sm text-gray-100 font-bold">Who We Are</span>
          <h2 className="text-4xl text-left text-gray-100 font-bold">Your Go-To Partners for Anything IT</h2>
        </div>

        <div className="items-center px-6 pb-8 bg-gray-800 flex flex-col gap-2">
          <p className="mt-8 mb-2 text-justify text-base text-gray-100">
            At ITBuddies, we are your trusted companions on the digital journey. With a passion for technology and a commitment to excellence, we have emerged as a premier IT company dedicated to solving your technology challenges and driving your business forward. 
          </p>
          <p className="mb-8 text-justify text-base text-gray-100">
            Our mission is to simplify the complex world of technology for businesses of all sizes. We understand that in today's fast-paced digital landscape, businesses need reliable and innovative IT solutions to stay competitive. Our goal is to be your partner in navigating this landscape, providing you with the tools and support you need to thrive.
          </p>
          <a href="" 
          className="button-primary self-start">
            More About ITBuddy</a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
