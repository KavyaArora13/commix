import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import '../Assets/Css/Header.scss';
import SocialIcon from '../Components/SocialIcon.jsx';
import { faHeart, faShoppingCart, faUserCircle, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderLogo from '../Assets/Image/HeaderLogo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null); // Ref to store the timeout

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = (index) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current); // Clear timeout to prevent dropdown from hiding
    }
    setActiveDropdown(index); // Show the dropdown immediately when mouse enters
  };

  const handleMouseLeaveLips = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null); // Hide dropdown after a delay
    }, 300); // Adjust the delay time (300ms in this case)
  };

  const handleMouseLeaveDropdown = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current); // Clear any existing timeout
    }
    setActiveDropdown(null); // Hide the dropdown immediately
  };

  const navLinks = [
    { 
      name: 'LIPS', 
      link: '/lips',
      dropdown: [
        {
          title: 'LIPSTICKS',
          items: [
            'TRANSFER PROOF LIPSTICKS',
            'MATTE LIPSTICKS',
            'LIQUID LIPSTICKS',
            'CRAYON LIPSTICKS',
            'POWDER LIPSTICKS',
            'SATIN LIPSTICKS',
            'BULLET LIPSTICKS',
            'LIP GLOSS & LINERS'
          ]
        },
        {
          title: 'LIP CARE',
          items: [
            'LIPSTICK FIXERS & REMOVERS',
            'LIP PRIMERS & SCRUBS',
            'LIP BALMS'
          ]
        },
        {
          title: 'LIPSTICK SETS & COMBOS',
          items: [
            'LIPSTICK SETS',
            'LIPSTICK COMBOS'
          ]
        }
      ]
    },
    { name: 'EYES', link: '/eyes' },
    { name: 'FACE', link: '/face' },
    { name: 'NAILS', link: '/nails' },
    { name: 'SKINCARE', link: '/skincare' },
    { name: 'ACCESSORIES', link: '/accessories' },
    { name: 'GIFTING', link: '/gifting' },
    { name: 'BESTSELLERS', link: '/bestsellers' },
    { name: 'NEW LAUNCHES', link: '/newlaunches' },
    { name: 'OFFERS', link: '/offers' },
    { name: 'BLOG', link: '/blog' }
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className='header-top-text'>Commix best cosmetic website</div>
      </div>

      <div className="header-middle">
        <div className="logo">
          <img src={HeaderLogo} alt="COMIX LOGO" className="comix-logo"/>
        </div>

        <div className="search-bar-container">
          <input className="search-bar" type="text" placeholder="Try Liquid Lipstick" />
          <button className="search-button">
            <SocialIcon icon={faSearch} link="#"/>
            <span className="search-text">Search</span>
          </button>
        </div>

        <div className="header-icons">
          <span className="login-register">
            <SocialIcon icon={faUserCircle} link="#"/> Login/Register
          </span>
          <span className="icon">
            <SocialIcon icon={faHeart} link="#"/>
          </span>
          <span className="icon">
            <SocialIcon icon={faShoppingCart} link="#"/>
          </span>
        </div>

        <button className="nav-toggle" onClick={toggleSidebar}>
          <SocialIcon icon={faBars} />
        </button>
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={HeaderLogo} alt="COMIX LOGO" className="sidebar-logo"/>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <SocialIcon icon={faTimes} />
          </button>
        </div>
        <nav className="nav">
          {navLinks.map((navItem, index) => (
            <Link key={index} to={navItem.link} className="nav-link" onClick={toggleSidebar}>
              {navItem.name}
            </Link>
          ))}
        </nav>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <nav className="nav desktop-nav">
        {navLinks.map((navItem, index) => (
          <div 
            key={index} 
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeaveLips} // Delay when leaving the "LIPS" area
          >
            <Link to={navItem.link} className="nav-link">
              {navItem.name}
            </Link>
            {navItem.dropdown && activeDropdown === index && (
              <div className="dropdown" onMouseLeave={handleMouseLeaveDropdown}> {/* Hide instantly when leaving dropdown */}
                {navItem.dropdown.map((category, catIndex) => (
                  <div key={catIndex} className="dropdown-category">
                    <h3>{category.title}</h3>
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
