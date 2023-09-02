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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <p className="mb-8 text-justify text-base text-gray-100">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <a href="" 
          className="self-start text-gray-100 p-4 text-l text-center uppercase font-bold bg-gray-500 rounded-md hover:bg-gray-400 transition-colors duration-200">
            More About ITBuddy</a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
