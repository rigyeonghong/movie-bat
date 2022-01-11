import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/Sign/LoginInput";
import { FlexWrapper, SignLogo } from "../styles/theme";
import Logo from "../assets/logo.png";
function Login() {
  return (
    <>
      <FlexWrapper>
        <Link to="/">
          <SignLogo src={Logo} />
        </Link>
      </FlexWrapper>
      <LoginInput />
    </>
  );
}
export default Login;
