import React from "react";
import logo from "../assests/images/winbuzz-logo.png";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar bg-dark">
        <div className="container-fluid bg-nav p-3 ">
          <img src={logo} alt="logo-winbuzz" height={40} />
          <div className="d-flex nav-search ">
            <button className=" nav-btn">Rules</button>
            <form className="d-flex" role="search">
              <input
                className=" form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button className=" nav-btn" type="button">
              Login
            </button>
            <button className=" nav-btn " type="button">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
