import React, { useState } from 'react';
import Main_logo from '../assets/images/logo.png';
import Search_logo from '../assets/images/search.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [navClassName, setNavClassName] = useState('navClassName');

  const toggleMenu = () => {
    setNavClassName(navClassName === 'navClassName' ? 'navClassName responsive' : 'navClassName');
  };

  const openCartPage = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  const openProfile = () => {
    navigate('/profile'); // Navigate to Profile page
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to Login/Signup page
  };

  return (
    <div className='Navbar'>
      {/* Logo */}
      <div className='Navlogo'>
        <img src={Main_logo} alt='logo' onClick={() => navigate('/')} />
      </div>

      {/* Navigation Links */}
      <div className={navClassName}>
        <ul>
          <a href='/'>Home</a>
          <a href='/designers'>Hire Designers</a>
          <a href='/designersform'>Post your card</a>
          <a href='/login' onClick={handleLogin}>Login/Signup</a>
        </ul>
      </div>

      {/* Add to Cart */}
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} onClick={openCartPage} className='cartIcon' />
      </div>

      {/* Search Bar */}
      <div className='searchBox'>
        <input type="text" placeholder='Search' />
        <img src={Search_logo} alt="Search" />
      </div>

      {/* Profile */}
      <div className="profile">
        <Avatar onClick={openProfile} style={{ background: "white", color: "black" }}>A</Avatar>
      </div>

      {/* Hamburger Menu */}
      <div className="barIcon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
