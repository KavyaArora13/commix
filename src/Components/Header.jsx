import React from 'react';
import { Link } from 'react-router-dom'; 
import '/Users/kavyaarora/Desktop/Task1/first/src/Assets/Css/Header.scss';
import SocialIcon from '/Users/kavyaarora/Desktop/Task1/first/src/Components/SocialIcon.jsx';
import { faHeart ,faShoppingCart, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderLogo from '/Users/kavyaarora/Desktop/Task1/first/src/Assets/Image/HeaderLogo.png';

const Header = () => {

  const navLinks = [
    { name: 'LIPS', link: '/lips' },
    { name: 'EYES', link: '/eyes' },
    { name: 'FACE', link: '/face' },
    { name: 'NAILS', link: '/nails' },
    { name: 'SKINCARE', link: '/skincare' },
    { name: 'ACCESSORIES', link: '/accessories' },
    { name: 'GIFTING', link: '/gifting' },
    { name: 'BESTSELLERS', link: '/bestsellers' },
    { name: 'NEWLAUNCHES', link: '/newlaunches' },
    { name: 'OFFERS', link: '/offers' },
    { name: 'BLOG', link: '/blog' }
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className='header-top-text'>New Exfoliate & Detox Scalp Shampoo</div>
      </div>

      {/* Header Middle Section */}
      <div className="header-middle d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="logo">
          <img src={HeaderLogo} alt="COMIX LOGO" className="comix-logo"/>
        </div>

        {/* Search Bar Section */}
        <div className="search-bar-container d-flex align-items-center mt-3 mt-md-0">
          <input className="search-bar form-control" type="text" placeholder="Try Liquid Lipstick" />
          <button className="search-button btn btn-outline-light ml-2" >
            <SocialIcon icon={faSearch} link="#"/> Search
          </button>
        </div>

        {/* Header Icons Section */}
        <div className="header-icons d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
          <span className="login-register mx-2 ">
            <SocialIcon icon={faUserCircle} link="#"/> Login/Register
          </span>
          <span className="icon mx-2">
            <SocialIcon icon={faHeart} link="#"/>
          </span>
          <span className="icon mx-2">
            <SocialIcon icon={faShoppingCart} link="#"/>
          </span>
        </div>
      </div>

      <nav className="nav">
        <div className="row">
          {navLinks.map((navItem, index) => (
            <Link key={index} to={navItem.link} className="nav-link col-lg col-md col-sm">
              {navItem.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
