import tmdbLogo from '../assets/tmdb-logo.svg';

const PageAbout = () => {
    return (
        <section className="about-page">
            <div className="about-content">
                <h1>About Movie Boo</h1>
                <p>
                    Movie Boo is the premier movie database designed for film enthusiasts!
                    Browse through Popular, Top Rated, Now Playing, and Upcoming titles to
                    find your next favorite!
                </p>

                <div className="tmdb-attribution">
                    <img 
                        src={tmdbLogo} 
                        alt="The Movie Database Logo" 
                        className="tmdb-logo"
                        style={{ width: '150px' }} 
                    />
                    <p>
                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PageAbout;