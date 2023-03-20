import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [heroImage, setHeroImage] = useState('')
    useEffect(() => {
        const fetchHeroImage = async () => {
            const apiKey = 'db81fd816a0a48776fd8b9ce320c6d10&language'
            const movieId = 76600
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
            );
            const data = await response.json()
            const backdropPath = data.backdrop_path
            const imageUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;
            console.log(imageUrl)
            setHeroImage(imageUrl);
            console.log(backdropPath)
        };
        fetchHeroImage();
    }, []);
    return (
        <header className="header">
            <div className="header__search-bar">
                <input className="header__search-input" type="text" placeholder="Search..." />
                <button className="header__search-button">Search</button>
            </div>
            <img className="header__image" src={heroImage} alt="Header" />
            <div className="header__text">
                <h1 className="header__title">Welcome to my website</h1>
                <p className="header__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="header__button">Learn more</button>
            </div>
        </header>
    );
}

export default Header;
