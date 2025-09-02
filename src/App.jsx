import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App(){
  const API_KEY ="e101966f";
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const fetchMovies = async (title) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
    const data = await res.json();
    if (data.Search) setMovies(data.Search);
    else setMovies([]);
  };

  const addToFavorites = (movie) => {
    const updated = [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Search</h1>

      <SearchBar onSearch={setSearchTerm} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} addToFavorites={addToFavorites} />
        ))}
      </div>

      {favorites.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-10">❤️ Favorites</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;