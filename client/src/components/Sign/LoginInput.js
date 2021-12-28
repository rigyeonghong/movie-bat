import React, { useState } from "react";
import axios from "axios";
import {
  InputItemWrapper,
  LoginBtnWrapper,
  LoginInputWrapper,
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
        <h2>로그인</h2>

        <InputItemWrapper>
          <label htmlFor="email">이메일</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputItemWrapper>
        <InputItemWrapper>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputItemWrapper>
        <InputItemWrapper>
          아직 회원이 아니신가요? <Link to="/auth/signup">Sign Up</Link>
        </InputItemWrapper>
        <LoginBtnWrapper type="submit" onClick={(e) => postLoginData(e)}>
          Sign in
        </LoginBtnWrapper>
      </Test>
    </LoginInputWrapper>
  );
}

export default LoginInput;
