import React from "react";
import LogoWrapper from "./LogoWrapper";
import MenuWrapper from "./MenuWrapper";
import SignWrapper from "./SignWrapper";
import { NavContainer } from "../../styles/theme";
function Nav() {
  return (
    <NavContainer>
      <LogoWrapper />
      <MenuWrapper />
      <SignWrapper />
    </NavContainer>
  );
}
export default Nav;
