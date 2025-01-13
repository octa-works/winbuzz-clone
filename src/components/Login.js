import React from "react";
import logo from "../assests/images/winbuzz-logo.png";

function Login() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-light">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <span>Welcome to Winbuzz</span>
              </h1>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <img
                src={logo}
                alt="logo"
                className="mx-auto d-block img-fluid"
              />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="username"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="password"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
