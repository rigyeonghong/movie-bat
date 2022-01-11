import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FlexWrapper, SignLogo } from "../styles/theme";
import SignUpInput from "../components/Sign/SignUpInput";
import TasteInput from "../components/Sign/TasteInput";
import Logo from "../assets/logo.png";
import { LoginInputWrapper, SignTitle, SignupWrapper } from "../styles/theme";
function SignUp() {
  const [isFirst, setIsFirst] = useState(true);
  return (
    <>
      <LoginInputWrapper>
        <Link to="/">
          <SignLogo src={Logo} />
        </Link>
        <SignupWrapper>
          <SignTitle>회원가입</SignTitle>
          {isFirst ? <SignUpInput setIsFirst={setIsFirst} /> : <TasteInput />}
        </SignupWrapper>
      </LoginInputWrapper>
    </>
  );
}
export default SignUp;
