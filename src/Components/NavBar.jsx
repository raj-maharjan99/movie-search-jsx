import React from "react";

function NavBar() {
  const logo =
    "https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg";
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-2 px-[50px]">
      <div className="logo border border-spacing-2">
        <img className="w-20 sm:w-24" src={logo} alt="" />
      </div>
      <div className="header font-[600] py-3 flex  justify-center gap-5">
        <div className="title">Home</div>
        <div className="title">Contact</div>
        <div className="title">Bollywood</div>
        <div className="title">Hollywood</div>
        <div className="title">Nepali Movie</div>
        <div className="title">More</div>
      </div>
      <div className="box flex gap-2 px-3 py-3">
        <button className="border py-1 px-2">Login</button>
        <button className="border px-2">Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;
