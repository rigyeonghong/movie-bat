import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FlexWrapper, SignLogo } from "../styles/theme";
import SignUpInput from "../components/Sign/SignUpInput";
import Logo from "../assets/logo_test.png";
function SignUp() {
  return (
    <>
      <FlexWrapper>
        <Link to="/">
          <SignLogo src={Logo} />
        </Link>
      </FlexWrapper>
      <SignUpInput />
    </>
  );
}
export default SignUp;
