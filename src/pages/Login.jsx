import React from "react";
import "../styles/components/Buttons.scss";
import "../styles/components/Form.scss";
import "../styles/components/Logo.scss";
import "../styles/PageForm.scss";
import { AiOutlineShop } from "react-icons/ai";

const Login = () => {
  return (
    <div className="page-form">
      <div className="form-container">
        <AiOutlineShop className="logo" color="black" size="75px" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="fredyflemus@gmail.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          />

          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
