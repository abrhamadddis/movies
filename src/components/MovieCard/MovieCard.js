import React, { useState, useEffect } from 'react';
import "./MovieCard.css"

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = 'db81fd816a0a48776fd8b9ce320c6d10'
    const year = 2022
    const sorted = 'popularity.desc'
    const limit = 10
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language="en-US"&sort_by=${sorted}&primary_release_year=${year}&page=1&vote_count.gte=1000&vote_average.gte=7&with_original_language=en&with_watch_providers=8&limit=${limit}`
            );
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);
    return (<div style={{ fontFamily: "sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Top 10 Movies in 2021</h1>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap" }}>
                {movies.map((movie) => (
                    <li key={movie.id} style={{ flex: 1, margin: "0.5rem", padding: "1rem", borderRadius: "0.5rem", boxShadow: "0 0.2rem 0.6rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.3rem rgba(0, 0, 0, 0.15)" }}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{ marginBottom: "0.5rem" }} />
                        <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>{movie.title}</h2>
                        <button style={{ border: "none", backgroundColor: "#E83F6F", color: "white", padding: "0.5rem", borderRadius: "0.5rem", cursor: "pointer", marginTop: "0.5rem" }}>
                            Play
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default MovieCard;
