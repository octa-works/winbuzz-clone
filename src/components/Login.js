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
                className="mx-auto d-block img-fluid p-4"
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
      <form class="row g-2 container">
        <input
          type="email"
          class="form-control col-md-6 w-75 mx-auto"
          id="inputEmail4"
          placeholder="username"
        />
        <br />
        <input
          type="password"
          class="form-control col-md-6 w-75 mx-auto"
          id="inputPassword4"
          placeholder="password"
        />
        <button type="submit" class="btn  col-md-6 w-75 mx-auto bg-warning">
          Log in
        </button>
        <button
          type="submit"
          class="btn btn-outline-warning  col-md-6 w-75 mx-auto "
        >
          Log in with Demo ID
        </button>
        <button
          type="submit"
          class="btn btn-outline-warning  col-md-6 w-75 mx-auto "
        >
          Download APK
        </button>
        <button
          type="submit"
          class="btn btn-outline-warning  col-md-6 w-75 mx-auto "
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
}

export default Login;
