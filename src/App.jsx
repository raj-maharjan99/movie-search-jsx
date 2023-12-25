import React, { useEffect, useState } from "react";
import Result from "./Components/Result";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const changeTheSearch = (e) => {
    setSearch(e.target.value);
  };
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  };
  const getSearchMovies = () => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        console.log("searchmovie", response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("hello  ");
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, [search]);

  return (
    <div className="max-w-[1200px] bg-slate-600 min-h-[400px] mx-auto shadow-xl p-3  ">
      <input
        value={search}
        onChange={changeTheSearch}
        placeholder="search movie here"
        type="search"
        className="w-full border border-black rounded text-slate-500 p-4 px-3  "
      />
      <Result movies={movies} />
    </div>
  );
}

export default App;
