import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function getSignUpData(e) {
    e.preventDefault();
    console.log("회원가입 데이터 보내기~");
    const response = axios.post("http://127.0.0.1:5000/auth/signup", {
      nickname,
      email,
      password,
    });
  }

  return (
    <>
      <p>회원가입~~~</p>
      <form>
        <p>
          닉네임 :
          <input
            type="text"
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        </p>
        <p>
          이메일 :
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          비밀번호 :
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit" onClick={(e) => getSignUpData(e)}>
          회원가입
        </button>
      </form>
    </>
  );
}
export default SignUp;
