function Footer() {
  return(
    <footer>
      <div className="p-8 flex flex-col gap-6 bg-gray-800 md:flex-row md:justify-start md:gap-20 lg:gap-40 md:px-10 md:py-16">
        {/* Logo Group */}
        <div>
          <a href='' aria-label="back to home" className="nav-logo">
            <img src="src\assets\icons\glasses-svgrepo-com.svg" aria-hidden="true" decoding="async"
            className="w-32 h-auto invert" />
          </a>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-1">
          <li className="mb-2">
            <span className="uppercase text-start text-lg text-gray-100 font-bold lg:text-xl">Sitemap</span>
          </li>
          <li>
            <a className="footer-nav-link" href="">Home</a>
          </li>
          <li>
            <a className="footer-nav-link" href="">About</a>
          </li>
          <li>
            <a className="footer-nav-link" href="">Services</a>
          </li>
          <li>
            <a className="footer-nav-link" href="">Portfolio</a>
          </li>
          <li>
            <a className="footer-nav-link" href="">Contact</a>
          </li>
        </ul>

        {/* Contact Info */}
        <ul className="flex flex-col gap-1">
          <li className="mb-2">
              <span className="uppercase text-start text-lg text-gray-100 font-bold">Contact</span>
          </li>

          <li>
              <a className="footer-nav-link" href="tel: 123-456-7890">(123) 456-7890</a>
          </li>

          <li>
              <a className="footer-nav-link" href="mailto:info@codestitch.com">info@itbuddies.com</a>
          </li>

          {/* Social Media */}
          <li className="mt-2">
            <div className="flex gap-4">
              <a className="cs-social-link" aria-label="visit google profile" href="">
                <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg" alt="google" width="20" height="20" />
              </a>

              <a className="cs-social-link" aria-label="visit facebook profile" href="">
                <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg" alt="facebook" width="20" height="20" />
              </a>

              <a className="cs-social-link" aria-label="visit instagram profile" href="">
                <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg" alt="instagram"width="20" height="20" />
              </a>
            </div>
          </li>
        </ul>

      </div>
      {/* Copyright */}
      <div className="w-auto border-t border-sky-900 py-4 flex justify-center bg-gray-800 mx-8">
        <div>
          <span className="footer-copyright">© Copyright 2023 - </span>
          <a href="" className="footer-copyright-link text-center">Mariposa Web Services</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
