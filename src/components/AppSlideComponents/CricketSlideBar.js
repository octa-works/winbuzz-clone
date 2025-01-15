import React, { useState } from "react";
import "../../assests/stylesheet/Desktop/SlideBarNav.css";
import { NavList } from "../NavbarList";

function CricketSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    return (
      <div>
        {" "}
        <div className="app">
          <div className="container-slide">
            {/* Button to toggle the drawer */}
            <button
              onClick={toggleDrawer}
              className="toggle-bton list-group-item list-group-item-action list-group-item-warning"
            >
              {isOpen ? "Previous" : `${NavList.Nav1}`}
            </button>

            {/* The Drawer */}
            <div className={`drawer ${isOpen ? "open" : ""}`}>
              <nav className="drawer-content">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default CricketSideBar;
