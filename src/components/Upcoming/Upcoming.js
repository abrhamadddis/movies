import React, { useState, useEffect } from 'react';

const Upcoming = () => {
    const apiKey = "db81fd816a0a48776fd8b9ce320c6d10";
    const sorted = "popularity.desc";
    const limit = "22";
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&sort_by=${sorted}&page=1&limit=${limit}`);
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
        <div className='card-movies'>
            <h1 className='card-title'>Upcoming Movies</h1>
            <ul className='movie-wrapper'>
                {movies.map((movie) => (
                    <li className='card-movie' key={movie.id}>
                        <p className='movie-rating'>{movie.vote_average}</p>
                        <img className='card-image' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                        <h2 className='title-movie'>{movie.title}</h2>
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
    );
};

export default Upcoming;