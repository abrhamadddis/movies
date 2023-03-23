import React, { useState } from 'react';
import './Nav.css';
import Logo from './Logo.png'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // function handleSearchInputChange(event) {
  //   setSearchQuery(event.target.value);
  // }

  // function handleSearchSubmit(event) {
  //   event.preventDefault();
  //   alert(`You searched for: ${searchQuery}`);
  // }

  return (
    <nav className="Navbar">
      <ul className={`Navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Home</a></li>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Movies</a></li>
        <img src={Logo} alt="Logo" className='Navbar-logo' />
        <li className="Navbar-item"><a href="#" className="Navbar-link">TvShow</a></li>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Genre</a></li>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Year</a></li>
      </ul>
      <button className="Navbar-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Nav;
