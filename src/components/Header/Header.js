import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [heroImage, setHeroImage] = useState('')
    const [heroMovie, setHeroMovie] = useState([])
    const [genres, setGenres] = useState([])
    useEffect(() => {
        const apiKey = 'db81fd816a0a48776fd8b9ce320c6d10&language'
        const movieId = 414906
        const fetchHeroImage = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
            );
            const data = await response.json()
            console.log(data)
            setHeroMovie(data)
            const backdropPath = data.backdrop_path
            const imageUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;
            setHeroImage(imageUrl);
        };
        const fetchGenres = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
            const data = await response.json();
            setGenres(data.genres)
        };

        fetchGenres();
        fetchHeroImage();
    }, []);
    return (
        <header className="header">
            <img className="header__image" src={heroImage} alt="Header" />
            <div className="header__text">
                <h1 className="header__title">{heroMovie.title}</h1>
                <ul className='genres'>
                    {genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <p className="header__subtitle">{heroMovie.overview}</p>
                <button class="header__button">
                    <i class="fas fa-play"></i> watch
                </button>
            </div>
        </header>
    );
}

export default Header;
