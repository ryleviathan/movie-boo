import { useState, useEffect } from 'react';
import { fetchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

const PageHome = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('popular');

    useEffect(() => {
        fetchMovies(category).then(data => {
            setMovies(data);
        });
    }, [category]);

    return (
        <section className="home-page">
            <div className="category-tabs">
                {/* Buttons for switching categories */}
                <button onClick={() => setCategory('popular')} className={category === 'popular' ? 'active' : ''}>Popular</button>
                <button onClick={() => setCategory('top_rated')} className={category === 'top_rated' ? 'active' : ''}>Top Rated</button>
                <button onClick={() => setCategory('now_playing')} className={category === 'now_playing' ? 'active' : ''}>Now Playing</button>
                <button onClick={() => setCategory('upcoming')} className={category === 'upcoming' ? 'active' : ''}>Upcoming</button>
            </div>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
};

export default PageHome;