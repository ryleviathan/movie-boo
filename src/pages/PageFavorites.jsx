import { useState, useEffect } from 'react';
import { getFavorites } from '../utilities/storage';
import MovieCard from '../components/MovieCard';

const PageFavorites = () => {
    // We call getFavorites() right here inside the starting value.
    // This is called "Lazy Initialization" and React loves it for performance.
    const [favs, setFavs] = useState(() => getFavorites());

    // You can actually remove the useEffect entirely now if you aren't logging anything!
    useEffect(() => {
        console.log("Favorites loaded directly into state:", favs);
    }, [favs]);

    return (
        <section className="favorites-page">
            <h1>My Favorites</h1>
            
            {favs.length > 0 ? (
                <div className="movies-grid">
                    {favs.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty-favorites">
                    <p>You have no favorite movies yet.</p>
                </div>
            )}
        </section>
    );
};

export default PageFavorites;