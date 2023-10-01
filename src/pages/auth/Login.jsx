import React, { useState } from "react";
import login from "../../assets/login.jpg";
import { Link } from "react-router-dom";

import "../../styles/login.css";
export default function Login() {
  // state variables declaration
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // methods
  const onChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (userName === "admin" && password === "12345") {
      localStorage.setItem("loggedIn", true);
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="Login-Page">
        <div className="Login-Page-Container">
          <div className="Login-Image-Container">
            <img className="login-image" src={login} alt="illustrations" />
          </div>
          <div className="Login-Input-fields-container">
            <div className="Login-Form-wrapper">
              <p id="Heading">Login</p>
              <form className="Input-Field-container" onSubmit={submitForm}>
                <i className="fa fa-user"></i>
                <input
                  className="Input-fields"
                  type="text"
                  placeholder="Username"
                  name="userName"
                  title="Password must be 8 Characters"
                  value={userName}
                  onChange={onChange}
                />

                <i className="fa fa-lock"></i>
                <input
                  className="Input-fields"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <input id="Submit-button" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
