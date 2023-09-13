import monitorImage from '../../images/monitor.jpg';
import monitorImageMobile from '../../images/monitor-m.jpg';

function ContactPageHero () {
  return(
    <section>
      <div className="relative flex flex-col items-center p-10 pb-16 bg-gray-100 dark:bg-gray-950 dark:bg-opacity-60 bg-opacity-60 md:mx-auto lg:py-32 lg:gap-16">
        {/* Content */}
        <h1 className="text-gray-900 dark:text-gray-100 my-8 text-5xl font-bold text-center md:max-w-2xl lg:text-6xl">Contact Us</h1>
        {/* Background Image */}
        <picture className="absolute top-0 left-0 -z-10 h-full">
            <source media="(max-width: 600px)" 
            srcSet={monitorImageMobile} />

            <source media="(min-width: 601px)" 
            srcSet={monitorImage} />

            <img loading="lazy" decoding="async" src={monitorImage} 
            alt="monitor" width="2250" height="1500" aria-hidden="true"
            className="object-cover h-full" />
        </picture>
      </div>
    </section>
  )
}

export default ContactPageHero;
