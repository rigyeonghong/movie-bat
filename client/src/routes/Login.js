import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // function postLoginData(e) {
  //   e.preventDefault();
  //   // console.log("로그인 데이터 보내기~");
  //   const response = axios.post("http://127.0.0.1:5000/login/", {
  //     email,
  //     password,
  //   });
  // }

  function postLoginData(e){
    e.preventDefault();
    
    fetch('http://127.0.0.1:5000/auth/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
  }

  return (
    <>
      <p>로그인~~~</p>
      <form>
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
        <button type="submit" onClick={(e) => postLoginData(e)}>
          로그인
        </button>
      </form>
    </>
  );
}
export default Login;
