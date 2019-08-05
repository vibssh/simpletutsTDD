import React from "react";
import Logo from "../../Assets/Svg/Logo";
import './Header.scss';

const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Logo width="120px" height="120px" />
        </div>
      </div>
    </header>
  );
};

export default Header;
