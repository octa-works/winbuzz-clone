import React from "react";
import logo from "../assests/images/winbuzz-logo.png";
import { IconsPack } from "../assests/icons/IconsPack";

function Signup() {
  return (
    <div style={HeaderDesign}>
      <div style={HeaderDesign.HeaderBorder} className="container-fluid">
        <div className="container-fluid d-flex justify-content-center p-3">
          <img src={logo} alt="signup-logo" />
        </div>
        <form className="signup-design">
          <div className="container-fluid d-flex justify-content-center border-bottom w-50">
            <select
              class="form-select w-auto bg-transparent border-0 text-white pt-2 pb-2"
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
          <div className="container-fluid justify-content-center border-bottom w-50 pt-2 pb-2">
            <input
              className="bg-transparent border-0 text-center"
              type="text"
              placeholder="Choose your password"
              required
            />
          </div>
          <div className="text-wrap" style={{ color: "red" }}>
            <p>
              (Password must be 8-15 characters long and must contain atleast)
            </p>
          </div>
          <div className="container-fluid justify-content-center border-bottom w-50 pt-2 pb-2">
            <input
              className="bg-transparent border-0 text-center"
              type="text"
              placeholder="Referrer Code (Optional)"
              required
            />
          </div>
          <div className="text-wrap">
            <p>
              By continuing you will receive a one-time verification code to
              your phone number by SMS.
            </p>
          </div>
          <button className="btn bg-primary mt-3 mb-3">GET OTP</button>
        </form>
        <div style={HeaderDesign.HorizonalMain} className="pt-2 pb-2">
          <hr className="border w-50 bg-danger" /> OR
          <hr className="border w-50" />
        </div>
        <div className="pt-2 pb-2">
          <div>Get your ready-made ID from whatsapp</div>
          <button className="btn bg-warning p-2 mt-3 mb-3">
            <IconsPack.Whatsapp /> WHATSAPP NOW
          </button>
          <div
            style={HeaderDesign.AlreadyAccount}
            className="container-fluid d-flex justify-content-center align-items-center pt-2 pb-2"
          >
            <div className="border-bottom">Already have an Account</div>
            <button className="bg-transparent text-white border-bottom border-0">
              LOGIN
            </button>
          </div>
          <div className="container-fluid d-flex justify-content-between p-2 text-wrap overflow-hidden">
            <Discount bonus="400% Bonus" deposit="1st Deposit" />
            <Discount bonus="50% Bonus" deposit="2nd Deposit" />
            <Discount bonus="10% Bonus" deposit="3rd Deposit" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Discount(props) {
  return (
    <div className="dis-btn">
      <div>{props.bonus}</div>
      <div className="dis-deposit badge">{props.deposit}</div>
    </div>
  );
}

const HeaderDesign = {
  backgroundColor: "#B88831",
  color: "white",
  padding: "10px",
  textAlign: "center",
  height: "100vh",
  HeaderBorder: {
    border: "2px solid white",
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "40%",
    margin: "auto",
  },
  HorizonalMain: {
    display: "flex",
    alignItems: "center",
    color: "black",
    justifyContent: "center",
    gap: "10px",
  },
  AlreadyAccount: {
    gap: "10px",
  },
};

export default Signup;
