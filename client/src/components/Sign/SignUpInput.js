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

function SignUpInput() {
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [genre, setGenre] = useState(null);
  const [time, setTime] = useState(null);
  const [region, setRegion] = useState("");
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  function getSignUpData() {
    // e.preventDefault();
    alert("회원가입 데이터 보내기~");
    // const response = axios.post("주소주소", {
    //   nickname,
    //   email,
    //   password,
    //   genre,
    //   time,
    //   region,
    // });
  }

  function isCheckedAll() {
    if (
      nickname &&
      regEmail.test(email) &&
      password == password2 &&
      genre &&
      time
    )
      getSignUpData();
    else {
      alert("필수 정보를 모두 입력해주세요!");
    }
  }

  return (
    <LoginInputWrapper>
      <Test>
        <SignTitle>회원가입</SignTitle>

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

        <InputItemWrapper>
          <SignItemTitle htmlFor="genre">선호하는 장르</SignItemTitle>
          <br />
          <SignSelect
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          >
            <option value="">장르</option>
            <option value="다큐멘터리">다큐멘터리</option>
            <option value="애니메이션">애니메이션</option>
            <option value="드라마">드라마</option>
          </SignSelect>
        </InputItemWrapper>

        <InputItemWrapper>
          <SignItemTitle htmlFor="genre">선호하는 러닝타임</SignItemTitle>
          <br />
          <SignSelect onChange={(e) => setTime(e.target.value)}>
            <option value="">러닝타임</option>
            <option value="0">30분 이하</option>
            <option value="30">30분 이상</option>
            <option value="60">60분 이상</option>
            <option value="90">90분 이상</option>
          </SignSelect>
        </InputItemWrapper>

        <InputItemWrapper>
          <SignItemTitle htmlFor="genre">거주 지역(선택)</SignItemTitle>
          <br />
          <SignSelect
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">지역</option>
            <option value="서울특별시">서울특별시</option>
            <option value="부산광역시">부산광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="울산광역시">울산광역시</option>
            <option value="세종특별자치시">세종특별자치시</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="충청남도">충청남도</option>
            <option value="전라북도">전라북도</option>
            <option value="전라남도">전라남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>
            <option value="제주특별자치도">제주특별자치도</option>
          </SignSelect>
        </InputItemWrapper>

        <LoginBtnWrapper>
          <LoginBtn
            type="submit"
            onClick={() => {
              isCheckedAll();
            }}
          >
            회원가입
          </LoginBtn>
        </LoginBtnWrapper>
      </Test>
    </LoginInputWrapper>
  );
}
export default SignUpInput;
