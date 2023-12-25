import React from "react";
import Nav from "./Nav";

function NavBar() {
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
      </ul>

      <div className="box flex gap-2 px-3 py-3">
        <button className="border py-1 px-2">Login</button>
        <button className="border px-2">Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;
