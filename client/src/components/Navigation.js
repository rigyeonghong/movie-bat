import React from "react";
import LogoWrapper from "./Nav/LogoWrapper";
import MenuWrapper from "./Nav/MenuWrapper";
<<<<<<< HEAD
=======
import SearchWrapper from "./Nav/SearchWrapper";
>>>>>>> master
import SignWrapper from "./Nav/SignWrapper";

import Logo from "../assets/logo_test.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLogo } from "../styles/theme";
function Navigation() {
  return (
<<<<<<< HEAD
    <Navbar bg="dark" sticky="top">
      <Container>
=======
    <Navbar
      sticky="top"
      style={{ justifyContent: "space-around", backgroundColor: "F141414" }}
    >
      <div style={{ display: "flex" }}>
>>>>>>> master
        <Navbar.Brand href="/">
          <NavLogo src={Logo} />
        </Navbar.Brand>

<<<<<<< HEAD
        <Nav className="justify-content-center">
          <Nav.Item className="px-4">
            <Nav.Link className="text-white" href="/movies">
              영화
=======
        <Nav style={{ textAlign: "center", alignItems: "center" }}>
          <Nav.Item className="px-4">
            <Nav.Link href="/movies" style={{ color: "white" }}>
              영화 추천
>>>>>>> master
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="px-4">
<<<<<<< HEAD
            <Nav.Link className="text-white" href="/festival">
              영화제
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="px-4">
            <Nav.Link className="text-white" href="/team">
=======
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
>>>>>>> master
              팀 소개
            </Nav.Link>
          </Nav.Item>
        </Nav>
<<<<<<< HEAD

        <SignWrapper />
      </Container>
=======
      </div>
      <Nav className="justify-content-end">
        <SearchWrapper />
        <SignWrapper />
      </Nav>
>>>>>>> master
    </Navbar>
  );
}
export default Navigation;
