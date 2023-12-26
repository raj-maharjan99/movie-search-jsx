import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import signUp from "./signUp";

function NavBar() {
  const [isSignUp, setIsSignUp] = useState(false);
  const buttonClicked = (e) => {
    if (e.target.name == `login`) {
      setIsSignUp(false);
    } else {
      console.log("signup");
      setIsSignUp(true);
    }
  };
  const logo =
    "https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg";
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-5 px-[50px]">
      <div className="logo border border-spacing-2">
        <img className="w-20 sm:w-24" src={logo} alt="" />
      </div>
      <ul className="nav-ul flex gap-3 font-[600]">
        <li className="title">
          <a href="">Home</a>
        </li>
        <li className="title">Contact</li>
        <li className="title">Bollywood</li>
        <li className="title">Hollywood</li>
        <li className="title">Nepali</li>
        <li className="title">More</li>
      </ul>{" "}
      <div>
        <input
          //   value={search}
          //   onChange={changeTheSearch}
          placeholder="search movie here"
          type="search"
          className="w-30 border border-black rounded text-slate-500 py-2 px-3  "
        />{" "}
        <button className="border border-black rounded text-slate-500 py-2 px-1">
          Search
        </button>
      </div>
      <div className="box flex gap-2 px-3 py-3">
        <Link to="/login">
          {!isSignUp && (
            <button
              className="border py-1 px-2 bg-red-400"
              onClick={buttonClicked}
              name="login"
            >
              Login
            </button>
          )}
          {isSignUp && (
            <button
              className="border py-1 px-2 "
              onClick={buttonClicked}
              name="login"
            >
              Login
            </button>
          )}
        </Link>
        <Link to="/signup">
          {isSignUp && (
            <button className="border px-2 bg-red-400" onClick={buttonClicked}>
              Sign Up
            </button>
          )}
          {!isSignUp && (
            <button className="border px-2 " onClick={buttonClicked}>
              Sign Up
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
