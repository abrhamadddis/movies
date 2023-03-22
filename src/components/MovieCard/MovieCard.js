import React, { useState, useEffect } from 'react';
import "./MovieCard.css"

const MovieCard = () => {
    const apiKey = "db81fd816a0a48776fd8b9ce320c6d10";
    const sorted = "popularity.desc";
    const year = "2022";
    const limit = "10";

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
        <div className='card-movie'>
            <h1 className='card-title'>Popular Right now</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img className='card-image' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                        <h2 className='title-movie'>{movie.title}</h2>
                        <p>
                            {movie.genre_ids.map((genreId) => {
                                const genre = genres.find((g) => g.id === genreId);
                                return genre ? genre.name : "";
                            }).join(", ")}
                        </p>
                        <p>Rating: {movie.vote_average}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    // return (
    //     <div className='card-movie'>
    //         <h1 className='card-title'>Popular Right now</h1>
    //         <ul>
    //             {movies.map((movie) => (
    //                 <li key={movie.id}>
    //                     <img className='card-image' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
    //                     <h2 className='title-movie'>{movie.title}</h2>
    //                     <ul>
    //                         {
    //                             genres.map(genre => (
    //                                 <li>{genre.name}</li>
    //                             ))
    //                         }
    //                     </ul>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>

    // );
};

export default MovieCard;
