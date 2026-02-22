import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
                );
                const data = await response.json();
                setMovies(data.results || []);
            } catch (err) {
                console.error("Search error:", err);
            } finally {
                setLoading(false);
            }
        };

        if (query) fetchSearchResults();
    }, [query, API_KEY]);

    if (loading) return <div className="loading">Searching for "{query}"...</div>;

    return (
        <div className="search-results-page">
            <h1 style={{ marginBottom: '2rem', textTransform: 'uppercase' }}>
                Results for: <span style={{ color: 'var(--brand)' }}>{query}</span>
            </h1>
            
            {movies.length > 0 ? (
                <div className="movies-grid">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty-favorites">
                    <p>No movies found for "{query}". Try something else!</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;