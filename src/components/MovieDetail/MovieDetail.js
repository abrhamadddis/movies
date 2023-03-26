// import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './MovieDetail.css'

function MovieDetail() {
    const location = useLocation();
    const history = useHistory();
    const movie = location.state?.movie;
    const date = new Date(movie.release_date)
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);
    if (!movie) {
        // If the movie prop does not exist, redirect the user to the home page
        history.push('/');
        return null;
    }
    const handleBackClick = () => {
        history.goBack();
    };
    return (
        <div>
            <button className='back-button' onClick={handleBackClick}>Back</button>
            <div className="movie-details">
                <div>
                    <img className='movie-details-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div>
                    <h2 className='movie-detail-title'>{movie.title}</h2>
                    <p className='movie-detail-overview'>{movie.overview}</p>
                    <p className='movie-detail-release-date'><span>Release Date:</span> {formattedDate}</p>
                </div>
            </div>
        </div>
    );
}
export default MovieDetail