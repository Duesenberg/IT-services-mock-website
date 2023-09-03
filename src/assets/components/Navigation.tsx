import React from 'react'

function Navigation() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Hide Nav Links when clicking anywhere else on screen
  const menuRef = React.useRef() as React.RefObject<HTMLElement>;
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      if(!menuRef.current?.contains(targetNode)) {
        setMenuVisible(false);
      } 
    }
    document.addEventListener('mousedown', handler);

    return(() => {
      document.removeEventListener('mousedown', handler);
    })
  });

  // Animate toggle dark mode button when clicked
  const animateToggleButton = () => {
    const toggleModeButton = document.querySelector('.toggle-mode-button');

    // Make button invisible when clicked
    toggleModeButton?.classList.add('opacity-0');
    // At the same moment make it visible and add transition so it fades in
    setTimeout(() => {
      toggleModeButton?.classList.add('transition-all');
      toggleModeButton?.classList.add('duration-500');
      toggleModeButton?.classList.remove('opacity-0');
    }, 0);
    // Remove transition effects after
    setTimeout(() => {
      toggleModeButton?.classList.remove('transition-all');
      toggleModeButton?.classList.remove('duration-500');
    }, 500);
  }
  
  return(
    <header className="sticky top-0 left-0 bg-gray-900 z-20">
      <div 
      className="navigation-container flex justify-between items-center px-4 py-4 shadow-lg shadow-gray-800">
        {/* Nav Logo */}
        <a href='' aria-label="back to home" className="nav-logo">
          <img src="src\assets\icons\glasses-svgrepo-com.svg" aria-hidden="true" decoding="async"
          className="w-8 h-auto invert" />
        </a>

        {/* Navigation List & Toggle Dark Mode Wrapper */}
        <div className="flex flex-row-reverse items-center gap-4">
          {/* Navigation List */}
          <nav role="navigation"
          className="flex relative"
          ref={menuRef}>
            {/* Mobile Nav Toggle */}
            <button aria-label="mobile menu toggle" aria-controls="nav-menu" 
            aria-expanded='false' onClick={toggleMenu}
            className="w-8 h-8">
              <div aria-hidden="true"
              className="flex flex-col w-full h-full justify-center items-center gap-1">
                <span aria-hidden="true" 
                className={"w-3/4 h-1 bg-white rounded-md transition-all duration-300 " + (menuVisible ? "rotate-45 translate-y-2" : "")}
                ></span>

                <span aria-hidden="true" 
                className={"w-3/4 h-1 bg-white rounded-md transition-all duration-300 " + (menuVisible ? "opacity-0": "")}
                ></span>

                <span aria-hidden="true" 
                className={"w-3/4 h-1 bg-white rounded-md transition-all duration-300 " + (menuVisible ? "-rotate-45 -translate-y-2" : "")}
                ></span>
              </div>
            </button>

            {/* Nav Links */}
            <div
            className={'absolute w-screen top-12 -right-4  px-10 bg-gray-900 z-20 overflow-hidden transition-all duration-500 ease-in-out shadow-lg shadow-gray-800 ' + (!menuVisible ? "h-0" : "h-52")}>
              <ul className={"py-2 flex flex-col gap-2 items-center"}>
                <li>
                  <a href="" className='header-nav-link'>Home</a>
                </li>
                <li>
                  <a href="" className='header-nav-link'>About</a>
                </li>
                <li>
                  <a href="" className='header-nav-link'>Services</a>
                </li>
                <li>
                  <a href="" className='header-nav-link'>Reviews</a>
                </li>
                <li>
                  <a href="" className='header-nav-link'>Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Dark Mode Toggle */}
          <button aria-label="dark mode toggle" onClick={() => {
            toggleDarkMode();
            animateToggleButton();
          }} 
          className='toggle-mode-button'>
            {darkMode &&
            <img src="src\assets\icons\moon-svgrepo-com.svg" alt="moon" aria-hidden='true'
            className="w-8 h-auto invert" />
            }

            {!darkMode &&
            <img src="src\assets\icons\sun-svgrepo-com.svg" alt="sun" aria-hidden='true'
            className="w-8 h-auto invert" />
            }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
