import React, { useEffect, useState } from "react";
import Result from "./Result";
import axios from "axios";

import Loading from "./Loading";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import Carousel from "./Carousel";

function Movie() {
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
    setMovies([]);
    console.log("hello  ");
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, [search]);

  return (
    <>
      <div className="flex justify-around">
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      <div className="w-[1240px]  bg-slate-500 mt-5  mx-auto shadow-xl p-3  ">
        <div className="flex justify-between py-2">
          {" "}
          <input
            value={search}
            onChange={changeTheSearch}
            placeholder="search movie here"
            type="search"
            className="w-50 border border-black rounded text-slate-500 py-3 px-3  "
          />
          <ImageCarousel />
        </div>

        {movies.length === 0 ? (
          <div className="  text-white font-[40px] text-center py-5">
            <h1>Loading........</h1>
          </div>
        ) : (
          <Result movies={movies} />
        )}
      </div>
    </>
  );
}

export default Movie;
