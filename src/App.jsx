import React from "react";
import Movie from "./Components/Movie";
import NavBar from "./Components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="">
      <NavBar />
      <Movie />
      <Footer />
    </div>
  );
}

export default App;
