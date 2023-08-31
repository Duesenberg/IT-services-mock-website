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
  
  return(
    <header className="navigation">
      <div 
      className="navigation-container flex justify-between items-center px-4 py-2">
        {/* Nav Logo */}
        <a href='' aria-label="back to home" className="nav-logo">
          <img src="src\assets\icons\glasses-svgrepo-com.svg" aria-hidden="true" decoding="async"
          className="w-10 h-auto" />
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
            className="w-10 h-10">
              <div aria-hidden="true"
              className="flex flex-col w-full h-full justify-around">
                <span aria-hidden="true" 
                className="w-full h-1 bg-gray-800 rounded-md"
                ></span>

                <span aria-hidden="true" 
                className="w-full h-1 bg-gray-800 rounded-md"
                ></span>

                <span aria-hidden="true" 
                className="w-full h-1 bg-gray-800 rounded-md"
                ></span>
              </div>
            </button>

            {/* Nav Links */}
            {menuVisible && 
            <div
            className='absolute top-10 right-0 p-4'>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Reviews</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>}
          </nav>

          {/* Dark Mode Toggle */}
          <button aria-label="dark mode toggle" onClick={toggleDarkMode}>
            {darkMode &&
            <img src="src\assets\icons\moon-svgrepo-com.svg" alt="moon" aria-hidden='true'
            className="w-10 h-auto" />
            }

            {!darkMode &&
            <img src="src\assets\icons\sun-svgrepo-com.svg" alt="sun" aria-hidden='true'
            className="w-10 h-auto" />
            }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
