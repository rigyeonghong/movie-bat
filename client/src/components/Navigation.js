import React from "react";
import LogoWrapper from "./Nav/LogoWrapper";
import MenuWrapper from "./Nav/MenuWrapper";
import SearchWrapper from "./Nav/SearchWrapper";
import SignWrapper from "./Nav/SignWrapper";

import Logo from "../assets/logo_test.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLogo } from "../styles/theme";
function Navigation() {
  return (
    <Navbar
      sticky="top"
      style={{ justifyContent: "space-around", backgroundColor: "F141414" }}
    >
      <div style={{ display: "flex" }}>
        <Navbar.Brand href="/">
          <NavLogo src={Logo} />
        </Navbar.Brand>

        <Nav style={{ textAlign: "center", alignItems: "center" }}>
          <Nav.Item className="px-4">
            <Nav.Link href="/movies" style={{ color: "white" }}>
              영화 추천
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="px-4">
            <Nav.Link style={{ color: "white" }} href="/festival">
              영화제 소개
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="px-4">
            <Nav.Link style={{ color: "white" }} href="/all">
              전체 영화
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="px-4">
            <Nav.Link style={{ color: "white" }} href="/team">
              팀 소개
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Nav className="justify-content-end">
        <SearchWrapper />
        <SignWrapper />
      </Nav>
    </Navbar>
  );
}
export default Navigation;
