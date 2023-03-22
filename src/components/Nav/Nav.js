import React, { useState } from 'react';
import './Nav.css';
import Logo from './Logo.png';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { TvShow } from '../Tvshow/Tvshow';
import { Year } from '../Year/Year';
import { Home } from '../Home/Home'
import { Genre } from '../Genre/Genre'
import { Movies } from '../Movies/Movies'




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
    <div className='test'>
      <BrowserRouter>
        <nav className="Navbar">
          <ul className={`Navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
            <li className="Navbar-item"><Link to='./Home' className="Navbar-link" >Home</Link></li>
            <li className="Navbar-item"><Link to='/Movies' className="Navbar-link">Movies</Link></li>
            <img src={Logo} alt="Logo" className='Navbar-logo' />
            <li className="Navbar-item"><Link to='/Tvshow'className="Navbar-link" >TvShow</Link></li>
            <li className="Navbar-item"><Link to='/Genre' className="Navbar-link">Genre</Link></li>
            <li className="Navbar-item"><Link to='/Year' className="Navbar-link" >Year</Link></li>
          </ul>
          <button className="Navbar-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/Tvshow">
            <TvShow />
          </Route>
          <Route path="/Genre">
            <Genre />
          </Route>
          <Route path="/Year">
            <Year />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default Nav;
