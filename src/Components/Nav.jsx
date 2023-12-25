import React from "react";
import "./nav.css";
function Nav() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              Brand
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a
                  className="btn btn-default btn-outline btn-circle collapsed"
                  data-toggle="collapse"
                  href="#nav-collapse1"
                  aria-expanded="false"
                  aria-controls="nav-collapse1"
                >
                  Categories
                </a>
              </li>
            </ul>
            <ul
              className="collapse nav navbar-nav nav-collapse"
              id="nav-collapse1"
            >
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Graphic design</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Motion</a>
              </li>
              <li>
                <a href="#">Mobile apps</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
