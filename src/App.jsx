import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageSingleMovie from './pages/PageSingleMovie';
import PageFavorites from './pages/PageFavorites';
import './App.css';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/search" element={<SearchResults />} />
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/movie/:id" element={<PageSingleMovie />} />
            <Route path="/favorites" element={<PageFavorites />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Movie Boo. FWD43 @ BCIT</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;