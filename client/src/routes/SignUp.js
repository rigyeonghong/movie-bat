import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);

  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  var regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
  function getSignUpData(e) {
    e.preventDefault();
    console.log("회원가입 데이터 보내기~");
    const response = axios.post("주소주소", {
      nickname,
      email,
      password,
      phoneNum,
    });
  }
  function checkNickname(n) {
    return n ? true : false;
  }
  function checkEmail(e) {
    return regEmail.test(e);
  }

  function checkPassword(p, p2) {
    if (!p) return false;
    return p === p2;
  }
  function checkPhoneNum(phone) {
    return regPhone.test(phone);
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
        <span style={{ display: checkNickname(nickname) ? "none" : "block" }}>
          닉네임이...빈칸이에요...
        </span>
        <p>
          이메일 :
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <span style={{ display: checkEmail(email) ? "none" : "block" }}>
          이메일 형식 확인확인
        </span>
        <p>
          전화번호 :
          <input
            type="text"
            name="phone"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </p>
        <span style={{ display: checkPhoneNum(phoneNum) ? "none" : "block" }}>
          전화번호 형식 확인확인
        </span>
        <p>
          비밀번호 :
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          비밀번호 확인:
          <input
            type="password"
            name="password-check"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </p>
        <span
          style={{
            display: checkPassword(password, password2) ? "none" : "block",
          }}
        >
          비밀번호 확인확인
        </span>
        <button
          disabled={
            checkEmail(email) &&
            checkPassword(password, password2) &&
            checkNickname(nickname) &&
            checkPhoneNum(phoneNum)
              ? false
              : true
          }
          type="submit"
          onClick={(e) => getSignUpData(e)}
        >
          회원가입
        </button>
      </form>
    </>
  );
}
export default SignUp;
