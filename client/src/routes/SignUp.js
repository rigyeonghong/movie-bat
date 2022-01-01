import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FlexWrapper, SignLogo } from "../styles/theme";
import SignUpInput from "../components/Sign/SignUpInput";
import TasteInput from "../components/Sign/TasteInput";
import Logo from "../assets/logo_test.png";
import {
  InputItemWrapper,
  LoginBtn,
  LoginBtnWrapper,
  LoginInputWrapper,
  SignInput,
  SignItemTitle,
  SignTitle,
  SignSelect,
  Test,
} from "../styles/theme";
function SignUp() {
  const [isFirst, setIsFirst] = useState(true);
  return (
    <>
      <LoginInputWrapper>
        <Link to="/">
          <SignLogo src={Logo} />
        </Link>
        <Test>
          <SignTitle>회원가입</SignTitle>
          {isFirst ? <SignUpInput setIsFirst={setIsFirst} /> : <TasteInput />}
        </Test>
      </LoginInputWrapper>
    </>
  );
}
export default SignUp;
