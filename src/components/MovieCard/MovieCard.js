import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./MovieCard.css"
import { Genre } from '../Genre/Genre';

const MovieCard = () => {
    const apiKey = "db81fd816a0a48776fd8b9ce320c6d10";
    const sorted = "popularity.desc";
    const year = "2022";
    const limit = "22";
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sorted}&primary_release_year=${year}&page=1&vote_count.gte=1000&vote_average.gte=7&with_original_language=en&with_watch_providers=8&limit=${limit}`);
                const data = await response.json();

                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        }
        async function fetchGenres() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);

                const data = await response.json();

                setGenres(data.genres);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
        fetchGenres();
    }, []);

    return (
        <div>
            <Genre />
            <div className='card-movies'>
                <h1 className='card-title'>Popular Right now</h1>
                <ul className='movie-wrapper'>
                    {movies.map((movie) => (
                        <li className='card-movie' key={movie.id}>
                            <Link to={{
                                pathname: `/movies/${movie.id}`,
                                state: { movie: movie }
                            }} className="link-tag">
                                <p className='movie-rating'>{movie.vote_average}</p>
                                <img className='card-image' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                <h2 className='title-movie'>{movie.title}</h2>
                            </Link>
                            <ul className='movie-genres'>
                                {movie.genre_ids.map((genreId) => {
                                    const genre = genres.find((g) => g.id === genreId);
                                    return genre ? <li className='movie-genre' key={genreId}>{genre.name}</li> : null;
                                })}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieCard;
