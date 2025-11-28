import React from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="logo">
          Furni<span>verse</span>
        </h1>

        <div className="btn-group">
          <button className="btn login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
