import React from "react";
import Logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
};

export default Header;
