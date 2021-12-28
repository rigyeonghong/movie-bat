import React, { useState } from "react";
import axios from "axios";
import {
  InputItemWrapper,
  LoginBtn,
  LoginBtnWrapper,
  LoginInputWrapper,
  SignInput,
  SignItemTitle,
  SignTitle,
  StyledLink,
  Test,
} from "../../styles/theme";
import { Link } from "react-router-dom";

function LoginInput() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function postLoginData(e) {
    e.preventDefault();
    alert("Sign in 데이터 보내기~");
    const response = axios.post("주소주소", {
      email,
      password,
    });
  }
  return (
    <LoginInputWrapper>
      <Test>
        <SignTitle>로그인</SignTitle>

        <InputItemWrapper>
          <SignItemTitle htmlFor="email">이메일</SignItemTitle>
          <br />
          <SignInput
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputItemWrapper>
        <InputItemWrapper>
          <SignItemTitle htmlFor="password">비밀번호</SignItemTitle>
          <br />
          <SignInput
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputItemWrapper>
        <InputItemWrapper>
          <SignItemTitle>
            아직 회원이 아니신가요?{" "}
            <StyledLink to="/auth/signup">Sign Up</StyledLink>
          </SignItemTitle>
        </InputItemWrapper>
        <LoginBtnWrapper>
          <LoginBtn type="submit" onClick={(e) => postLoginData(e)}>
            Sign in
          </LoginBtn>
        </LoginBtnWrapper>
      </Test>
    </LoginInputWrapper>
  );
}

export default LoginInput;
