import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar box-shadow">
      <div id="navbar-menu-desktop" className="navbar-section">
        <div className="navbar-branding mr-3" onClick={() => navigate("/")}>
          Let's Code Animations
        </div>
      </div>
    </nav>
  );
};
