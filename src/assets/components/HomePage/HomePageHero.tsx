function HomePageHero() {
  return(
    <section>
      <div className="relative flex flex-col items-center p-10 pb-20 gap-8 bg-gray-100 dark:bg-gray-950 dark:bg-opacity-60 bg-opacity-60 md:mx-auto lg:py-40 lg:gap-16">
        {/* Content */}
        <h1 className="text-gray-900 dark:text-gray-100 my-8 text-5xl font-bold text-center md:max-w-2xl lg:text-6xl">The Most Competent IT Staff At Your Disposal</h1>
        <p className=" text-gray-900 dark:text-gray-100  text-xl text-center md:max-w-2xl lg:text-2xl">
          We at ITBuddy like to get down to the nitty-gritty of anything IT related. Our team is filled with the most experienced and professional Developers, Designers, SEO Experts and more.
        </p>
        <a href="/contact" 
        className="button-primary">
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

export default HomePageHero;
