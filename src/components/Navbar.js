import React from "react";
import logo from "../assests/images/winbuzz-logo.png";
import NavbarList from "./NavbarList";
import Login from "./Login";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-success">
      <nav className="navbar bg-dark pt-4">
        <div className="container-fluid bg-nav p-3 ">
          <Link to="/winbuzz-clone" className="text-white">
            <img src={logo} alt="logo-winbuzz" height={40} />
          </Link>
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
            <button
              type="button"
              className="nav-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
            <Login />
            {/* <button className=" nav-btn " type="button">
              Register
            </button> */}
            <Link
              className="nav-btn text-black align-content-center"
              to="/winbuzz-clone/signup"
            >
              {" "}
              Register
            </Link>
          </div>
        </div>
        <NavbarList />
      </nav>
    </div>
  );
}

export default Navbar;
