import React from "react";
import "../styles/PageForm.scss";
import "../styles/components/Form.scss";
import "../styles/components/Buttons.scss";

const MyAccount = () => {
  return (
    <div className="page-form">
      <div className="form-container">
        <h1 className="title">MyAccount</h1>
        <form action="/" className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <p className="value">Fredy Flores</p>
          <label htmlFor="email" className="label">
            Email
          </label>
          <p className="value">fredyflemus@gmail.com</p>
          <label htmlFor="password" className="label">
            Password
          </label>
          <p className="value">********</p>

          <input
            type="submit"
            value="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
