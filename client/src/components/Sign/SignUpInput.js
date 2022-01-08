import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CenterWrapper } from "../../styles/theme";
import { Button, Form } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { signinState } from "../../state";

function SignUpInput({ setIsFirst }) {
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
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="emailInput">
          <Form.Label>이메일</Form.Label>

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
        <Form.Group className="mb-3" controlId="phoneNumInput">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="tel"
            onChange={(e) => checkPhoneNum(e.target.value)}
            onBlur={(e) => setPhoneNum(e.target.value)}
          />
          <Form.Text
            className={
              phoneNum != "" && !isOkInput["okPhoneNum"]
                ? "isShown"
                : "isHidden"
            }
          >
            전화번호 형식을 확인해주세요
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordInput">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => checkPassword(e.target.value, password2)}
            onBlur={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordCheckInput">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
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
          </Form.Text>
        </Form.Group>
      </Form>
      <CenterWrapper>
        <Button
          className="nextBtn"
          disabled={
            !(
              isOkInput["okNickname"] == true &&
              isOkInput["okEmail"] == true &&
              isOkInput["okPassword"] == true &&
              isOkInput["okPhoneNum"] == true
            )
          }
          onClick={() => submitSigninData()}
        >
          다음
        </Button>
      </CenterWrapper>
    </>
  );
}
export default SignUpInput;
