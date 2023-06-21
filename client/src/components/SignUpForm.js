import React from "react";
import { useState, setState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUpForm(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const resetForm = () => {
    setRegisterName("");
    setRegisterUsername("");
    setRegisterPassword("");
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = {
        name: registerName,
        username: registerUsername,
        password: registerPassword,
      };

      const response = await axios.post(
        "http://localhost:3000/users/signup",
        data,
        config
      );
      console.log(response.data);
      resetForm();
      setErrorMessage(false);

      navigate("/user");
    } catch (error) {
      console.error(error);
      setErrorMessage(true);
      resetForm();
    }
  };

  return (
    <>
      <div className="login-page-container">
        <div className="login-form-container">
          <div className="form-header"></div>

          <form onSubmit={register}>
            <div className="username-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              ></input>
            </div>
            <div className="username-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              ></input>
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                className="login-submit"
                type="submit"
                value="SIGN UP"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
