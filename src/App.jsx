import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import "./App.css";

const API_KEY = "e419103b7e37dec7f55944c844533271";
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");

  const fetchMovies = (page, search, sort) => {
    let url;
    if (search) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}&page=${page}`;
    } else {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sort}&page=${page}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  };

  useEffect(() => {
    fetchMovies(currentPage, searchTerm, sortBy);
  }, [currentPage, searchTerm, sortBy]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <>
      <header>
        <h1>Movie Explorer</h1>
      </header>

      <div className="controls">
        <SearchBar onSearch={handleSearch} />
        <SortDropdown onSort={handleSort} />
      </div>

      <main id="main">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>

      <Pagination
        currentPage={currentPage}
        onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        onNext={() => setCurrentPage((p) => p + 1)}
      />
    </>
  );
}
