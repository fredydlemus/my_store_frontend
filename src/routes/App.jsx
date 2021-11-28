import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import "../styles/global.scss";
import NewPassword from "../pages/NewPassword";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import PasswordRecovery from "../pages/PasswordRecovery";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/create-account" element={<CreateAccount />} />
          <Route exact path="/my-account" element={<MyAccount />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path="/recovery-password"
            element={<PasswordRecovery />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
