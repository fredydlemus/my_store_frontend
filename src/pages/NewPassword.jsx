import React from "react";
import "../styles/PageForm.scss";
import "../styles/components/Form.scss";
import "../styles/components/Buttons.scss";
import "../styles/components/Logo.scss";
import { AiOutlineShop } from "react-icons/ai";

const NewPassword = () => {
  return (
    <div className="page-form">
      <div className="form-container">
        <AiOutlineShop className="logo" color="black" size="75px" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          />

          <label htmlFor="new-password" className="label">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="********"
            className="input input-password"
          />

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

export default NewPassword;
