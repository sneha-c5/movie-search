import React from 'react'

function MovieCard({ movie, addToFavorites }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-full object-cover rounded-lg"

      />
      <h3 className="mt-2 text-lg font-semibold text-center">{movie.Title}</h3>
      <p className="text-sm text-gray-400">{movie.Year}</p>

      {addToFavorites && (
        <button
          onClick={() => addToFavorites(movie)}
          className="mt-2 px-4 py-1 bg-yellow-500 rounded hover:bg-yellow-600 "
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
}
export default MovieCard;