<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect, useRef } from "react";
>>>>>>> master
import axios from "axios";
import { CenterWrapper } from "../../styles/theme";
import { Button, Form } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { signinState } from "../../state";

function SignUpInput({ setIsFirst }) {
<<<<<<< HEAD
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNum, setPhoneNum] = useState("");
  const [havePhoneNum, setHavePhoneNum] = useState(true);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  // nickname, email, phoneNum, password
  const [isRightInput, setIsRightInput] = useState(["", "", "", ""]);
  const [isClicked, setIsClicked] = useState(false);
  const setSigninData = useSetRecoilState(signinState);

  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPhone = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
  const submitSigninData = () => {
    setSigninData([nickname, email, phoneNum, password]);
    setIsFirst(false);
  };
  const emailDupCheck = async () => {
    const response = await axios
      .post(`/auth/signup/id`, {
        email: email,
      })
      .then((res) => res.data);
    console.log(email);
    console.log(response);
  };

  const nickDupCheck = async () => {
    const response = await axios
      .post(`/auth/signup/nick`, {
        nickname: nickname,
      })
      .then((res) => res.data);
    console.log(nickname);
    console.log(response);
  };
  const checkInputValue = () => {
    let newIsRightInput = [false, false, false, false];
    // TODO api 요청하면 수정 필요
    newIsRightInput[0] = true;
    if (regEmail.test(email)) {
      newIsRightInput[1] = true;
    }
    if (
      (havePhoneNum === true && regPhone.test(phoneNum) === true) ||
      havePhoneNum === false
    ) {
      newIsRightInput[2] = true;
    }
    if (password && password === password2) {
      newIsRightInput[3] = true;
    }
    setIsRightInput(newIsRightInput);
  };
  if (
    isRightInput[0] &&
    isRightInput[1] &&
    isRightInput[2] &&
    isRightInput[3]
  ) {
    submitSigninData();
  }
=======
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [isOkInput, setIsOkInput] = useState(
    { okNickname: null },
    { okEmail: null },
    { okPhoneNum: null },
    { okPassword: null }
  );

  const setSigninData = useSetRecoilState(signinState);
  console.log(signinState);
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPhone = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;

  const checkNickname = async (nick) => {
    if (nick == "") {
      setIsOkInput((cur) => {
        return { ...cur, okNickname: false };
      });
      return;
    }
    const response = await axios
      .post(`/auth/signup/nick`, {
        nickname: nick,
      })
      .then((res) => res.data)
      .then(() => {
        setIsOkInput((cur) => {
          return { ...cur, okNickname: true };
        });
      })
      .catch(() => {
        setIsOkInput((cur) => {
          return { ...cur, okNickname: false };
        });
      });
  };

  const checkPhoneNum = (pn) => {
    if (!regPhone.test(pn)) {
      setIsOkInput((cur) => {
        return { ...cur, okPhoneNum: false };
      });
    } else {
      setIsOkInput((cur) => {
        return { ...cur, okPhoneNum: true };
      });
    }
  };

  const checkPassword = (pw, pw2) => {
    if ((pw == "" && pw2 == "") || pw != pw2) {
      setIsOkInput((cur) => {
        return { ...cur, okPassword: false };
      });
      return;
    } else {
      setIsOkInput((cur) => {
        return { ...cur, okPassword: true };
      });
    }
  };

  const checkEmail = async (em) => {
    if (!regEmail.test(em)) {
      setIsOkInput((cur) => {
        return { ...cur, okEmail: false };
      });
      return;
    }
    const response = await axios
      .post(`/auth/signup/id`, {
        email: em,
      })
      .then((res) => res.data)
      .then(() => {
        setIsOkInput((cur) => {
          return { ...cur, okEmail: true };
        });
      })
      .catch(() => {
        setIsOkInput((cur) => {
          return { ...cur, okEmail: false };
        });
      });
  };

  const submitSigninData = () => {
    setSigninData([nickname, email, phoneNum, password]);
    setIsFirst(false);
  };
>>>>>>> master
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="emailInput">
          <Form.Label>이메일</Form.Label>

<<<<<<< HEAD
          <div style={{ display: "relative" }}>
            <Form.Control
              style={{ display: "inline" }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              onClick={() => emailDupCheck()}
              style={{ position: "absolute" }}
            >
              중복 확인
            </Button>
          </div>
          <Form.Text
            className={isClicked && !isRightInput[1] ? "isShown" : "isHidden"}
          >
            이메일 형식을 확인해주세요
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="nicknameInput">
          <Form.Label>닉네임</Form.Label>
          <div style={{ display: "relative" }}>
            <Form.Control
              style={{ display: "inline" }}
              type="text"
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button
              onClick={() => nickDupCheck()}
              style={{ position: "absolute" }}
            >
              중복 확인
            </Button>
          </div>
          <Form.Text
            className={isClicked && !isRightInput[0] ? "isShown" : "isHidden"}
          >
            중복된 닉네임입니다
          </Form.Text>
        </Form.Group>

=======
          <Form.Control
            type="email"
            onChange={(e) => {
              checkEmail(e.target.value);
            }}
            onBlur={(e) => setEmail(e.target.value)}
          />

          <Form.Text
            className={
              email != "" && !!isOkInput["okEmail"] == false
                ? "isShown"
                : "isHidden"
            }
          >
            {"사용할 수 없는 이메일입니다"}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nicknameInput">
          <Form.Label>닉네임</Form.Label>

          <Form.Control
            type="text"
            onChange={(e) => checkNickname(e.target.value)}
            onBlur={(e) => setNickname(e.target.value)}
          />

          <Form.Text
            className={
              nickname != "" && !isOkInput["okNickname"]
                ? "isShown"
                : "isHidden"
            }
          >
            {"사용할 수 없는 닉네임입니다"}
          </Form.Text>
        </Form.Group>
>>>>>>> master
        <Form.Group className="mb-3" controlId="phoneNumInput">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="tel"
<<<<<<< HEAD
            disabled={!havePhoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            label="없음"
            onChange={(e) => setHavePhoneNum(!e.target.checked)}
          />
          <Form.Text
            className={isClicked && !isRightInput[2] ? "isShown" : "isHidden"}
=======
            onChange={(e) => checkPhoneNum(e.target.value)}
            onBlur={(e) => setPhoneNum(e.target.value)}
          />
          <Form.Text
            className={
              phoneNum != "" && !isOkInput["okPhoneNum"]
                ? "isShown"
                : "isHidden"
            }
>>>>>>> master
          >
            전화번호 형식을 확인해주세요
          </Form.Text>
        </Form.Group>
<<<<<<< HEAD

=======
>>>>>>> master
        <Form.Group className="mb-3" controlId="passwordInput">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
<<<<<<< HEAD
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

=======
            onChange={(e) => checkPassword(e.target.value, password2)}
            onBlur={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
>>>>>>> master
        <Form.Group className="mb-3" controlId="passwordCheckInput">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
<<<<<<< HEAD
            onChange={(e) => setPassword2(e.target.value)}
          />
          <Form.Text
            className={isClicked && !isRightInput[3] ? "isShown" : "isHidden"}
          >
            {password == null
              ? "비밀번호를 입력해주세요"
              : "비밀번호가 일치하지 않습니다"}
=======
            onChange={(e) => checkPassword(password, e.target.value)}
            onBlur={(e) => setPassword2(e.target.value)}
          />
          <Form.Text
            className={
              password != "" && password2 != "" && !isOkInput["okPassword"]
                ? "isShown"
                : "isHidden"
            }
          >
            {"비밀번호가 일치하지 않습니다"}
>>>>>>> master
          </Form.Text>
        </Form.Group>
      </Form>
      <CenterWrapper>
        <Button
          className="nextBtn"
<<<<<<< HEAD
          onClick={() => {
            setIsClicked(true);
            checkInputValue();
          }}
=======
          disabled={
            !(
              isOkInput["okNickname"] == true &&
              isOkInput["okEmail"] == true &&
              isOkInput["okPassword"] == true &&
              isOkInput["okPhoneNum"] == true
            )
          }
          onClick={() => submitSigninData()}
>>>>>>> master
        >
          다음
        </Button>
      </CenterWrapper>
    </>
  );
}
export default SignUpInput;
