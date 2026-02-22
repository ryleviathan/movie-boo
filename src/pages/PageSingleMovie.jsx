import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFavorites, addToFavorites, removeFromFavorites } from '../utilities/storage';

const PageSingleMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isFav, setIsFav] = useState(false);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                const favs = getFavorites();
                setIsFav(favs.some(f => f.id === data.id));
            })
            .catch(err => console.error("Error:", err));
    }, [id, API_KEY]);

    const handleToggleFav = () => {
        if (isFav) {
            removeFromFavorites(movie);
            setIsFav(false);
        } else {
            addToFavorites(movie);
            setIsFav(true);
        }
    };

    if (!movie) return <div className="loading">Loading...</div>;

    const ratingPercentage = Math.round(movie.vote_average * 10);

    return (
        <div className="single-movie-page">
            <div 
                className="movie-backdrop" 
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
            >
                <div className="backdrop-overlay"></div>
            </div>

            <div className="movie-content-wrapper">
                <div className="poster-column">
                    <img 
                        src={movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                            : 'https://via.placeholder.com/500x750?text=No+Poster'} 
                        alt={movie.title} 
                    />
                </div>

                <div className="info-column">
                    <h1>{movie.title}</h1>
                    <div className="movie-stats">
                        <p><strong>Released:</strong> {movie.release_date}</p>
                        <p><strong>Rating:</strong> {ratingPercentage}%</p>
                    </div>
                    
                    <h3>Overview</h3>
                    <p className="overview-text">{movie.overview}</p>

                    <button 
                        className={`btn-favorite ${isFav ? 'is-fav' : ''}`} 
                        onClick={handleToggleFav}
                    >
                        {isFav ? '💔 Remove from Favorites' : '🧡 Add to Favorites'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageSingleMovie;