import { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") {
      onSearch(term); // send term to App
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search movies..."
        className="px-4 py-2 w-64 rounded-l-lg text-white"
      />
      <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}

export default SearchBar;