import React, { useState } from 'react';
import './Nav.css';
import Logo from './Logo.png';
import { Link } from "react-router-dom";






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
    <div className='test'>
      <nav className="Navbar">
        <ul className={`Navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <li className="Navbar-item"><Link to='./Home' className="Navbar-link" >Home</Link></li>
          <li className="Navbar-item"><Link to='/Movies' className="Navbar-link">Movies</Link></li>
          <img src={Logo} alt="Logo" className='Navbar-logo' />
          <li className="Navbar-item"><Link to='/Tvshow' className="Navbar-link" >TvShow</Link></li>
          <li className="Navbar-item"><Link to='/Upcoming' className="Navbar-link">Upcoming</Link></li>
        </ul>
        <button className="Navbar-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>

  );
}

export default Nav;
