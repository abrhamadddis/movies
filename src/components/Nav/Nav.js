import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    alert(`You searched for: ${searchQuery}`);
  }

  return (
    <nav className="Navbar">
      <ul className={`Navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Home</a></li>
        <li className="Navbar-item"><a href="#" className="Navbar-link">About</a></li>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Services</a></li>
        <li className="Navbar-item"><a href="#" className="Navbar-link">Contact</a></li>
      </ul>
      <form className="Navbar-search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="Navbar-search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit" className="Navbar-search-button">Search</button>
      </form>
      <button className="Navbar-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Nav;
