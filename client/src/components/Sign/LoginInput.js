import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  InputItemWrapper,
  LoginBtn,
  LoginBtnWrapper,
  LoginInputWrapper,
  SignInput,
  SignItemTitle,
  SignTitle,
  StyledLink,
  SignupWrapper,
  KakaoBtn,
} from "../../styles/theme";
import { userState } from "../../state";
import { useNavigate } from "react-router-dom";

function LoginInput() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const postLoginData = async () => {
    const response = await axios
      .post("/auth/signin", {
        email,
        password,
      })
      .then((res) => res.data);

    if (response.result == "fail") {
      alert("로그인 실패");
    } else {
      setUser({
        userIdx: response["user_idx"],
        userNickname: response["user_nick"],
        userGenre1: response["user_genre1"],
        userGenre2: response["user_genre2"],
        userRunningtime: response["user_runningtime"],
        userRegion: response["user_region"],
      });
      navigate("/");
    }
  };

  return (
    <LoginInputWrapper>
      <SignupWrapper>
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
            아직 회원이 아니신가요?
            <StyledLink to="/auth/signup">Sign Up</StyledLink>
          </SignItemTitle>
        </InputItemWrapper>
        <LoginBtnWrapper>
          <LoginBtn type="submit" onClick={(e) => postLoginData(e)}>
            Sign in
          </LoginBtn>
          {/* <KakaoBtn>
            <a href="">카카오톡으로 시작하기</a>
          </KakaoBtn> */}
        </LoginBtnWrapper>
      </SignupWrapper>
    </LoginInputWrapper>
  );
}

export default LoginInput;
