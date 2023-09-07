function ServicesPageServices() {
  return(
    <section>
      <div className="flex flex-col px-6 py-8 gap-10 bg-gray-900 relative md:px-10 md:py-16 xl:px-20 bg-[url('./src/assets/images/graphy-dark.png')] bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-pink-950 to-transparent"
        ></div>
        <div className="absolute top-0 left-0 h-56 z-0 w-full bg-sky-950"
        ></div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-96 z-0 w-full bg-gradient-to-t from-pink-950 to-transparent"
        ></div>
        <div className="absolute bottom-0 left-0 h-56 z-0 w-full bg-sky-950"
        ></div>
        {/* Decorative Divs ^ */}
        
        <ul className="flex flex-col gap-8">
          <li className="service-list-item">
            <div className="service-list-item-top">
              <picture className="" aria-hidden="true">
                <img className="invert" src="src\assets\icons\computer-svgrepo-com.svg" alt="icon" width="100" height="100" loading="lazy" decoding="async" />
              </picture>
              <h2 className="text-2xl text-center text-gray-100 font-bold lg:text-3xl">IT Services</h2>
            </div>
            
            <div className="service-list-item-bottom">
              <p className="mt-8 mb-2 text-justify text-base text-gray-100 lg:text-lg">
                In today's digitally driven world, information technology (IT) is the backbone of nearly every business, irrespective of its size or industry. The seamless operation of IT systems is crucial for productivity, security, and competitiveness. As a seasoned provider of IT services, we offer a comprehensive range of solutions designed to meet the diverse needs of businesses in the modern landscape. At ITBuddies, we understand that every organization is unique, with distinct IT requirements. Our commitment to excellence lies in our ability to tailor our IT services to precisely match your needs, ensuring that your technology supports your business objectives efficiently and effectively.
              </p>
            </div>
          </li>

          <li className="service-list-item">
            <div className="service-list-item-top">
              <picture className="" aria-hidden="true">
                <img className="invert" src="src\assets\icons\server-svgrepo-com.svg" alt="icon" width="100" height="100" loading="lazy" decoding="async" />
              </picture>
              <h2 className="text-2xl text-center text-gray-100 font-bold lg:text-3xl">Website Management</h2>
            </div>
            
            <div className="service-list-item-bottom">
              <p className="mt-8 mb-2 text-justify text-base text-gray-100 lg:text-lg">
                A website serves as the digital storefront of your business, making it one of the most critical assets for brand representation, customer engagement, and revenue generation. At ITBuddies, we recognize the paramount importance of a well-maintained website. Our comprehensive website management services are designed to ensure that your online presence not only captures the essence of your brand but also operates seamlessly and efficiently. We understand that your website is a reflection of your business, and its performance directly impacts your success. Our commitment to excellence revolves around delivering website management solutions that go beyond mere maintenance, focusing on optimization, security, and user experience to help you achieve your digital objectives.
              </p>
            </div>
          </li>

          <li className="service-list-item">
            <div className="service-list-item-top">
              <picture className="" aria-hidden="true">
                <img className="invert" src="src\assets\icons\headphones-alt-2-svgrepo-com.svg" alt="icon" width="100" height="100" loading="lazy" decoding="async" />
              </picture>
              <h2 className="text-2xl text-center text-gray-100 font-bold lg:text-3xl">24/7 IT Support</h2>
            </div>
            
            <div className="service-list-item-bottom">
              <p className="mt-8 mb-2 text-justify text-base text-gray-100 lg:text-lg">
                Customer expectations are higher than ever, and businesses must provide top-notch IT customer support to ensure satisfaction and loyalty. At [Your Company Name], we recognize the critical role IT customer support plays in maintaining positive relationships with your clients. Our comprehensive IT customer support services are designed to not only resolve technical issues promptly but also enhance your customers' overall experience. Our commitment to excellence in IT customer support revolves around ensuring that your customers receive the best assistance possible. We understand that every interaction with your clients is an opportunity to strengthen your brand and build trust. We are dedicated to providing a seamless and responsive support experience that reflects positively on your business.
              </p>
            </div>
          </li>

          <li className="service-list-item">
            <div className="service-list-item-top">
              <picture className="" aria-hidden="true">
                <img className="invert" src="src\assets\icons\developer-centerpublic-api-svgrepo-com.svg" alt="icon" width="100" height="100" loading="lazy" decoding="async" />
              </picture>
              <h2 className="text-2xl text-center text-gray-100 font-bold lg:text-3xl">Design, Development, SEO</h2>
            </div>
            
            <div className="service-list-item-bottom">
              <p className="mt-8 mb-2 text-justify text-base text-gray-100 lg:text-lg">
              Your website is often the first point of contact between your business and potential customers. A captivating website not only establishes your online presence but also serves as a powerful marketing tool. At [Your Company Name], we specialize in offering a holistic approach to website design, development, and SEO (Search Engine Optimization) services, ensuring that your online platform not only looks stunning but also performs exceptionally well in the digital realm. Our commitment to excellence in website design, development, and SEO services is driven by our passion for crafting exceptional online experiences. We understand that a website should be more than just visually appealing – it should be an effective tool for attracting, engaging, and converting visitors into loyal customers. Our mission is to deliver customized solutions that align with your unique business goals and aspirations.
              </p>
            </div>
          </li>
        </ul>
        

      </div>
    </section>
  )
}

export default ServicesPageServices;
