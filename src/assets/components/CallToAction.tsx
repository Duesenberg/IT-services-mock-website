function CallToAction() {
  return(
    <section>
      <div className="relative flex flex-col items-center p-8 gap-8 bg-gray-950 bg-opacity-60">
        <div className="items-center pb-8 flex flex-col gap-2">
          <span className="uppercase text-start text-sm text-gray-100 font-bold self-start">Contact Us</span>
          <h2 className="text-4xl text-left text-gray-100 font-bold self-start">Let's get it done!</h2>
          <p className="mt-8 mb-2 text-justify text-base text-gray-100">
            Contact us by sending us an e-mail and letting us know about what you need, or just give us a call. We will get back to you as soon as we can!
          </p>
          <a href="" className="self-start text-gray-100 p-4 text-l text-center uppercase font-bold bg-gray-500 rounded-md hover:bg-gray-400 transition-colors duration-200">
            Contact Us</a>
        </div>

        {/* Background Image */}
        <picture className="absolute top-0 left-0 -z-10 h-full">
          <source media="(max-width: 600px)" srcSet="src\assets\images\contact-m.jpg" />

          <source media="(min-width: 601px)" srcSet="src\assets\images\contact.jpg" />

          <img loading="lazy" decoding="async" src="src\assets\images\contact.jpg" 
          alt="contact" aria-hidden="true"
          className="object-cover h-full" />
        </picture>
      </div>
    </section> 
  )
}

export default CallToAction;
