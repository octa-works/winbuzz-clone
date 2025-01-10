import React from "react";
import logo from "../assests/images/winbuzz-logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid bg-nav">
          <img src={logo} alt="logo-winb" />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
