import React from "react";
import LogoWrapper from "./Nav/LogoWrapper";
import MenuWrapper from "./Nav/MenuWrapper";
import SignWrapper from "./Nav/SignWrapper";

import Logo from "../assets/logo_test.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HomeLogo, NavLogo, NavContainer } from "../styles/theme";
function Navigation() {
  return (
    <Navbar bg="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <NavLogo src={Logo} />
        </Navbar.Brand>

        <Nav className="justify-content-center">
          <Nav.Item className="px-4">
            <Nav.Link className="text-white" href="/movies">
              영화
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="px-4">
            <Nav.Link className="text-white" href="/festival">
              영화제
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="px-4">
            <Nav.Link className="text-white" href="/team">
              팀 소개
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <SignWrapper />
      </Container>
    </Navbar>
  );
}
export default Navigation;
