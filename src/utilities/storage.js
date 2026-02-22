export const getFavorites = () => {
    const favs = localStorage.getItem('movie-boo-favs');
    return favs ? JSON.parse(favs) : [];
};

export const addToFavorites = (movie) => {
    const favs = getFavorites();
    const newFavs = [...favs, movie];
    localStorage.setItem('movie-boo-favs', JSON.stringify(newFavs));
};

export const removeFromFavorites = (movie) => {
    const favs = getFavorites();
    const newFavs = favs.filter(f => f.id !== movie.id);
    localStorage.setItem('movie-boo-favs', JSON.stringify(newFavs));
};