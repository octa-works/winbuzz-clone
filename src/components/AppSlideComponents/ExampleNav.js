import React, { useState } from "react";
import "./Example.css"

function ExampleNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {" "}
      <div className="app">
        <div className="container">
          {/* Button to toggle the drawer */}
          <button onClick={toggleDrawer} className="toggle-btn">
            {isOpen ? "Close Menu" : "Open Menu"}
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

          {/* Main content */}
          <div className="main-content">
            <h1>Welcome to the App</h1>
            <p>This is where your main content goes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleNav;
