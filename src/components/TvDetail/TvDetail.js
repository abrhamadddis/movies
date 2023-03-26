import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './TvDetail.css'

function TvDetail() {
    const apiKey = "db81fd816a0a48776fd8b9ce320c6d10";
    const history = useHistory();
    const [tvDetails, setTvDetails] = useState(null);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    // const formattedDate = date.toLocaleString('en-US', options);
    useEffect(() => {
        async function fetchTvDetails() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/tv/${tvDetails.id}?api_key=${apiKey}&language=en-US`);
                const data = await response.json();

                setTvDetails(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTvDetails();
    }, [tvDetails.id]);

    if (!tvDetails) {
        // If the movie details are not loaded yet, show a loading indicator
        return <p>Loading...</p>;
    }

    const handleBackClick = () => {
        history.goBack();
    };
    return (
        <div>
            <button className='back-button' onClick={handleBackClick}>Back</button>
            <div className="movie-details">
                <div>
                    <img className='movie-details-image' src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`} alt={tvDetails.title} />
                </div>
                <div>
                    <h2 className='movie-detail-title'>{tvDetails.name}</h2>
                    <p className='movie-detail-overview'>{tvDetails.overview}</p>
                    {/* <p className='movie-detail-release-date'><span>First Air Date:</span> {formattedDate}</p> */}
                </div>
            </div>
        </div>
    );
}
export default TvDetail;