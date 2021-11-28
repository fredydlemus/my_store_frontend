import React from "react";
import "../styles/components/Buttons.scss";
import "../styles/components/Form.scss";
import "../styles/Login.scss";

const CreateAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Fredy"
            className="input input-name"
          />
          <label htmlFor="email" className="label">
            Email
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
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="********"
            className="input input-password"
          />

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
