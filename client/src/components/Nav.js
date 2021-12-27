import React from "react";
import LogoWrapper from "./Nav/LogoWrapper";
import MenuWrapper from "./Nav/MenuWrapper";
import SignWrapper from "./Nav/SignWrapper";
import { NavContainer } from "../styles/theme";
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
