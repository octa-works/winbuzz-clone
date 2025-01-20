import React from "react";
import logo from "../assests/images/winbuzz-logo.png";

function Signup() {
  return (
    <div style={HeaderDesign}>
      <div>Div</div>
      <div style={HeaderDesign.HeaderBorder} className="container">
        <img src={logo} alt="signup-logo" />
        <div></div>
      </div>
    </div>
  );
}

const HeaderDesign = {
  backgroundColor: "#B88831",
  color: "white",
  padding: "10px",
  textAlign: "center",
  HeaderBorder: {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  },
};

export default Signup;
