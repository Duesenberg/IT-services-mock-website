function Hero() {
  return(
    <section>
      <div className="relative flex flex-col items-center p-10 gap-8 bg-gray-950 bg-opacity-60">
        {/* Content */}
        <h1 className="text-gray-100 my-8 text-5xl font-bold text-center">The Most Competent IT Staff At Your Disposal</h1>
        <p className=" text-gray-100  text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis donec eget tellus turpis imperdiet aenean libero. 
        </p>
        <a href="" 
        className="text-gray-100 p-4 text-l text-center uppercase font-bold bg-gray-500 rounded-md hover:bg-gray-400 transition-colors duration-200">
          Contact Us</a>

        {/* Background Image */}
        <picture className="absolute top-0 left-0 -z-10 h-full">
            <source media="(max-width: 600px)" 
            srcSet="src\assets\images\monitor-m.jpg" />

            <source media="(min-width: 601px)" 
            srcSet="src\assets\images\monitor.jpg" />

            <img loading="lazy" decoding="async" src="src\assets\images\monitor.jpg" 
            alt="monitor" width="2250" height="1500" aria-hidden="true"
            className="object-cover h-full" />
        </picture>


      </div>
    </section>
  )
}

export default Hero;
