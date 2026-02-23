import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchInput)}`);
            setSearchInput('');
        }
    };

    return (
        <nav className="main-nav">
            <div className="nav-logo">
                <NavLink to="/">Movie Boo</NavLink>
            </div>

            <div className="nav-wrapper"> 
                <form className="search-container" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="search-input"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit" className="search-btn">💀</button>
                </form>

                <ul className="nav-links">
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;