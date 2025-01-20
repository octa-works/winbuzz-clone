import React from "react";
import logo from "../assests/images/winbuzz-logo.png";

function Signup() {
  return (
    <div style={HeaderDesign}>
      <div>Div</div>
      <div style={HeaderDesign.HeaderBorder} className="container">
        <div className="container d-flex justify-content-center p-3">
          <img src={logo} alt="signup-logo" />
        </div>
        <form className="signup-design">
          <div className="container d-flex justify-content-center border-bottom w-50">
            <select
              class="form-select w-auto bg-transparent border-0 text-white"
              aria-label="Default select example"
            >
              <option value="in" selected className="text-dark">
                India
              </option>
              <option value="us" className="text-dark">
                USA
              </option>
            </select>
            <input
              className="bg-transparent border-0 text-center"
              type="number"
              placeholder="Mobile no."
              required
            />
          </div>
        </form>
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
    border: "2px solid white",
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "700px",
    margin: "auto",
  },
};

export default Signup;
