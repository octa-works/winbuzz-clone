import React from "react";
import logo from "../assests/images/winbuzz-logo.png";
import { IconsPack } from "../assests/icons/IconsPack";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container text-white" style={HeaderDesign}>
      <div
        className="container border border-white rounded p-4"
        style={HeaderDesign.HeaderBorder}
      >
        <div className="d-flex justify-content-center mb-3">
          <img
            src={logo}
            alt="signup-logo"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <Link
          className="bg-transparent text-white text-decoration-none underline-none"
          to="/winbuzz-clone"
        >
          <IconsPack.Back className="h2" />
        </Link>
        <form className="signup-design">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center border-bottom py-3">
            <select
              className="form-select w-auto bg-transparent border-0 text-white"
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
              className="bg-transparent border-0 text-center mt-2 mt-md-0 ms-md-2"
              type="number"
              placeholder="Mobile no."
              required
            />
          </div>
          <div className="d-flex justify-content-center border-bottom py-3">
            <input
              className="bg-transparent border-0 text-center w-100"
              type="text"
              placeholder="Choose your password"
              required
            />
          </div>
          <div className="text-center text-danger mt-2">
            <p>
              (Password must be 8-15 characters long and must contain at least)
            </p>
          </div>
          <div className="d-flex justify-content-center border-bottom py-3">
            <input
              className="bg-transparent border-0 text-center w-100"
              type="text"
              placeholder="Referrer Code (Optional)"
              required
            />
          </div>
          <div className="text-center mt-2">
            <p>
              By continuing you will receive a one-time verification code to
              your phone number by SMS.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3 mb-3 px-4">GET OTP</button>
          </div>
        </form>

        <div className="d-flex align-items-center my-3">
          <hr className="border w-50" />
          <span className="mx-2">OR</span>
          <hr className="border w-50" />
        </div>

        <div className="text-center">
          <div>Get your ready-made ID from WhatsApp</div>
          <button className="btn btn-warning mt-3 mb-3 px-4">
            <IconsPack.Whatsapp /> WHATSAPP NOW
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center pt-3 pb-3">
          <div className="border-bottom me-2">Already have an Account</div>
          {/* <button className="bg-transparent text-white border-bottom border-0">
            LOGIN
          </button> */}
          <Link
            className="bg-transparent text-white border-bottom border-0"
            to="/winbuzz-clone"
          >
            LOGIN
          </Link>
        </div>

        <div className="row text-center">
          <div className="col-12 col-md-4">
            <Discount bonus="400% Bonus" deposit="1st Deposit" />
          </div>
          <div className="col-12 col-md-4">
            <Discount bonus="50% Bonus" deposit="2nd Deposit" />
          </div>
          <div className="col-12 col-md-4">
            <Discount bonus="10% Bonus" deposit="3rd Deposit" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Discount(props) {
  return (
    <div className="dis-btn my-2">
      <div>{props.bonus}</div>
      <div className="dis-deposit badge bg-secondary mt-2">{props.deposit}</div>
    </div>
  );
}

const HeaderDesign = {
  backgroundColor: "#B88831",
  HeaderBorder: {
    maxWidth: "500px",
    margin: "auto",
  },
};

export default Signup;
