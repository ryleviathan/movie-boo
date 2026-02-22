import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFavorites, addToFavorites, removeFromFavorites } from '../utilities/storage';

const MovieCard = ({ movie }) => {
    const [isFav, setIsFav] = useState(false);
    const ratingPercentage = Math.round(movie.vote_average * 10);

    useEffect(() => {
        const favs = getFavorites();
        setIsFav(favs.some(f => f.id === movie.id));
    }, [movie.id]);

    const handleToggleFav = (e) => {
        e.preventDefault();
        if (isFav) {
            removeFromFavorites(movie);
            setIsFav(false);
        } else {
            addToFavorites(movie);
            setIsFav(true);
        }
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <div className="btn-fav-container">
                    <button 
                        className={`heart-btn ${isFav ? 'is-fav' : ''}`} 
                        onClick={handleToggleFav}
                        title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                    >
                        {isFav ? '🧡' : '🖤'}
                    </button>
                </div>

                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                />
                <div className="movie-overlay">
                    <p className="rating">{ratingPercentage}%</p>
                    <Link to={`/movie/${movie.id}`} className="btn-more-info">More Info</Link>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="release-date">{movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;