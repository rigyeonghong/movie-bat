import React, { useState, useRef } from "react";
import axios from "axios";
import { CenterWrapper } from "../../styles/theme";
import { Button, Form } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { signinState } from "../../state";

function SignUpInput({ setIsFirst }) {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [noPhoneNum, setNoPhoneNum] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  const [isOkInput, setIsOkInput] = [
    { okNickname: null },
    { okEmail: null },
    { okPhoneNum: null },
    { okPassword: null },
  ];
  const [isClicked, setIsClicked] = useState(false);
  // const [duplicated, setDuplicated] = useState(
  //   { dupEmail: null },
  //   { dupNickname: null }
  // );
  const setSigninData = useSetRecoilState(signinState);

  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPhone = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;

  const submitSigninData = () => {
    if (
      isOkInput["okNickname"] &&
      isOkInput["okEmail"] &&
      isOkInput["okPhoneNum"] &&
      isOkInput["okPassword"]
    ) {
      setSigninData([nickname, email, phoneNum, password]);
      setIsFirst(false);
    } else return;
  };

  const checkNickname = async () => {
    if (nickname == "") return;
    const response = await axios
      .post(`/auth/signup/nick`, {
        nickname: nickname,
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
    // if (duplicated["dupNickname"] == false) {
    //   setIsOkInput((cur) => {
    //     console.log(cur);
    //     return { ...cur, okNickname: true };
    //   });
    // } else {
    //   setIsOkInput((cur) => {
    //     console.log(cur);
    //     console.log(nickname);
    //     return { ...cur, okNickname: false };
    //   });
    // }
  };

  const checkPhoneNum = () => {
    if (noPhoneNum === false && regPhone.test(phoneNum) === true) {
      setIsOkInput((cur) => {
        return { ...cur, okPhoneNum: true };
      });
    } else if (noPhoneNum == true) {
      setIsOkInput((cur) => {
        return { ...cur, okPhoneNum: true };
      });
    } else {
      setIsOkInput((cur) => {
        return { ...cur, okPhoneNum: false };
      });
    }
  };

  const checkPassword = () => {
    if (password && password === password2) {
      setIsOkInput((cur) => {
        return { ...cur, okPassword: true };
      });
    }
  };

  const checkEmail = async () => {
    const response = await axios
      .post(`/auth/signup/id`, {
        email: email,
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
    // if (duplicated["dupEmail"] == true || regEmail.test(email) == false) {
    //   setIsOkInput((cur) => {
    //     return { ...cur, okEmail: false };
    //   });
    // } else {
    //   setIsOkInput((cur) => {
    //     return { ...cur, okEmail: true };
    //   });
    // }
  };

  const checkInputValue = async () => {
    console.log("clicked");
    await checkNickname()
      .then(() => checkEmail())
      .then(() => checkPhoneNum())
      .then(() => checkPassword());
    console.log("도올,,,굴러가유");
    submitSigninData();
    setIsClicked(true);
    console.log("도올,,,굴러가22");
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="emailInput">
          <Form.Label>이메일</Form.Label>

          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Form.Text
            className={
              isClicked && !!isOkInput["okEmail"] == false
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
            onChange={(e) => setNickname(e.target.value)}
          />

          <Form.Text
            className={
              isClicked && !isOkInput["okNickname"] ? "isShown" : "isHidden"
            }
          >
            {"사용할 수 없는 닉네임입니다"}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumInput">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="tel"
            disabled={noPhoneNum}
            onChange={(e) => {
              setPhoneNum(e.target.value);
            }}
          />
          <Form.Check
            type="checkbox"
            label="없음"
            onChange={(e) => {
              setNoPhoneNum(e.target.checked);
            }}
          />
          <Form.Text
            className={
              isClicked && !isOkInput["okPhoneNum"] ? "isShown" : "isHidden"
            }
          >
            전화번호 형식을 확인해주세요
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordInput">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordCheckInput">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <Form.Text
            className={
              isClicked && !isOkInput["okPassword"] ? "isShown" : "isHidden"
            }
          >
            {password == null
              ? "비밀번호를 입력해주세요"
              : "비밀번호가 일치하지 않습니다"}
          </Form.Text>
        </Form.Group>
      </Form>
      <CenterWrapper>
        <Button className="nextBtn" onClick={() => checkInputValue()}>
          다음
        </Button>
      </CenterWrapper>
    </>
  );
}
export default SignUpInput;
