import React from "react";
import "../styles/PageForm.scss";
import "../styles/components/Form.scss";
import "../styles/components/Logo.scss";
import "../styles/components/Email.scss";
import { AiOutlineShop, AiOutlineMail } from "react-icons/ai";

const SendEmail = () => {
  return (
    <div className="page-form">
      <div className="form-container">
        <AiOutlineShop className="logo" color="black" size="75px" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how you can to reset your
          password
        </p>
        <div className="email-image">
          <AiOutlineMail size="55px" />
        </div>

        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't received the email? </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
