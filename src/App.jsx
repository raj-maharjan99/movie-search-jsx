import React from "react";
import Movie from "./Components/Movie";
import NavBar from "./Components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import SignUp from "./Components/signUp";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Movie />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
