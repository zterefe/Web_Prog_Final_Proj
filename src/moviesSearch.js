import React, {useState} from "react";
import MovieCard from "./movieCard";

const MoviesSearch =  () => {
  const [movieQueryName, setMovieQueryName] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1693eeabbd5c39a35a1a007c5a57e387&language=en-US&query=${movieQueryName}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="movieQueryName">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          value={movieQueryName}
          name="movieQueryName"
          onChange={(e) => setMovieQueryName(e.target.value)}
          placeholder="i.e Die Hard"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );

}

export default MoviesSearch;