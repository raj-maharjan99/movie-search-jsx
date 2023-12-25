import React from "react";

function Loading() {
  return (
    <div>
      <div className="loader">
        <div className="loader_overlay" />
        <div className="loader_cogs">
          <div className="loader_cogs__top">
            <div className="top_part" />
            <div className="top_part" />
            <div className="top_part" />
            <div className="top_hole" />
          </div>
          <div className="loader_cogs__left">
            <div className="left_part" />
            <div className="left_part" />
            <div className="left_part" />
            <div className="left_hole" />
          </div>
          <div className="loader_cogs__bottom">
            <div className="bottom_part" />
            <div className="bottom_part" />
            <div className="bottom_part" />
            <div className="bottom_hole">{/* lol */}</div>
          </div>
          <p>loading</p>
        </div>
        <h1>Cog loader</h1>
        <h2>Created in pure css</h2>
      </div>
    </div>
  );
}

export default Loading;
