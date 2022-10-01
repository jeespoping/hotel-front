import React, { useState } from "react";
import { Link } from "react-router-dom";

import BackgroundApp from "../../assets/jpg/hoteles.jpg";
import Logo from "../../assets/png/logo.png";
import LoginForm from "../../components/Auth/LoginForm";

import "./Auth.scss";

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState("login");

  const handleForm = () => {
    switch (selectedForm) {
      case "login":
        return <LoginForm setSelectedForm={setSelectedForm} />;

      default:
        break;
    }
  };

  return (
    <div className="auth" style={{ backgroundImage: `url(${BackgroundApp})` }}>
      <div className="auth__dark"></div>
      <div className="auth__box">
        <div className="auth__box-log">
          <Link to="/">
            <img src={Logo} alt="cameron"></img>
          </Link>
          {handleForm()}
        </div>
      </div>
    </div>
  );
}
