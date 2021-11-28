import React from "react";
import "../styles/PageForm.scss";
import "../styles/components/Form.scss";
import "../styles/components/Logo.scss";
import { AiOutlineShop } from "react-icons/ai";

const PasswordRecovery = () => {
  return (
    <div className="page-form">
      <div className="form-container">
        <AiOutlineShop className="logo" color="black" size="75px" />
        <h1 className="title">Password Recovery</h1>
        <p className="subtitle">
          Introduce the email address used to create your account
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" className="input input-email" />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
