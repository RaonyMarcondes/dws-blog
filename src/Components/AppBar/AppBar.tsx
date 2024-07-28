import React from "react";
import { Link } from "react-router-dom";
import { AppBar as AppBarStyled } from "../AppBar/AppBar.styles";
import Logo from "../../Assets/Images/logo.svg";

const AppBar: React.FC = () => {
  return (
    <AppBarStyled>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" title="Go to Home" />
        </Link>
      </div>
    </AppBarStyled>
  );
};

export default AppBar;
