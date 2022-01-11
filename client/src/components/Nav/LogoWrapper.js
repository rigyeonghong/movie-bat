import React from "react";
import { Link } from "react-router-dom";
import { HomeLogo, NavLogo } from "../../styles/theme";
import Logo from "../../assets/logo.png";
function LogoWrapper() {
  return (
    <HomeLogo>
      <Link to="/">
        <NavLogo src={Logo} />
      </Link>
    </HomeLogo>
  );
}
export default LogoWrapper;
