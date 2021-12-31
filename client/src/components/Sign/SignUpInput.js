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
  SignSelect,
  Test,
} from "../../styles/theme";
import { useRecoilState, useSetRecoilState } from "recoil";
import { signinState } from "../../state";

function SignUpInput({ setIsFirst }) {
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNum, setPhoneNum] = useState("01012345678");
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const setSigninData = useSetRecoilState(signinState);
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const submitSigninData = () => {
    console.log(nickname, email);
    setSigninData([nickname, email, phoneNum, password]);
    setIsFirst(false);
  };
  return (
    <>
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
        <SignItemTitle htmlFor="nickname">닉네임</SignItemTitle>
        <br />
        <SignInput
          type="text"
          name="nickname"
          id="nickname"
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputItemWrapper>

      <InputItemWrapper>
        <SignItemTitle htmlFor="password">비밀번호</SignItemTitle>
        <br />
        <SignInput
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </InputItemWrapper>

      <InputItemWrapper>
        <SignItemTitle htmlFor="password2">비밀번호 확인</SignItemTitle>
        <br />
        <SignInput
          type="password"
          name="password"
          id="password2"
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
      </InputItemWrapper>

      <LoginBtnWrapper>
        <button onClick={() => submitSigninData()}>다음</button>
      </LoginBtnWrapper>
    </>
  );
}
export default SignUpInput;
