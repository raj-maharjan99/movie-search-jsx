import React, { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="max-w-[1200px] min-h-[400px] mx-auto shadow-xl p-3  ">
      <input
        placeholder="search movie here"
        type="search"
        className="w-full border border-black rounded text-slate-500 p-4 px-3  "
      />
      <Result movies={movies} />
    </div>
  );
}

export default App;
