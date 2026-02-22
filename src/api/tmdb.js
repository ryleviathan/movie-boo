export const fetchMovies = async (category) => {
    // We grab the key right when the function runs
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3/movie';

    console.log("Checking Key inside fetch:", API_KEY); // This will help us debug!

    try {
        const response = await fetch(
            `${BASE_URL}/${category}?api_key=${API_KEY}&language=en-US&page=1`
        );
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.results.slice(0, 12);
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};