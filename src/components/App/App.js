import React from 'react';
import './App.css';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <MovieCard />
    </div>
  );
}

export default App;
