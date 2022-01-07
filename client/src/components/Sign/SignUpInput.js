import React, { useState, useEffect } from "react";
import axios from "axios";
import { CenterWrapper } from "../../styles/theme";
import { Button, Form } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { signinState } from "../../state";

function SignUpInput({ setIsFirst }) {
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [noPhoneNum, setNoPhoneNum] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  const [isOkInput, setIsOkInput] = useState(
    { okNickname: false },
    { okEmail: false },
    { okPhoneNum: false },
    { okPassword: false }
  );
  const [isClicked, setIsClicked] = useState(false);
  const [duplicated, setDuplicated] = useState(
    { dupEmail: false },
    { dupNickname: false }
  );
  const setSigninData = useSetRecoilState(signinState);
  console.log(nickname);
  console.log(isOkInput["okNickname"]);
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPhone = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;

  const submitSigninData = () => {
    setSigninData([nickname, email, phoneNum, password]);
    setIsFirst(false);
  };
  // useEffect(() => {}, [noPhoneNum]);

  const checkNickname = async () => {
    const response = await axios
      .post(`/auth/signup/nick`, {
        nickname: nickname,
      })
      .then((res) => res.data)
      .then(() => {
        setDuplicated((cur) => {
          return { ...cur, dupNickname: false };
        });
      })
      .catch(() => {
        setDuplicated((cur) => {
          return { ...cur, dupNickname: true };
        });
      });
    if (duplicated["dupNickname"] == false && nickname) {
      setIsOkInput((cur) => {
        return { ...cur, okNickname: true };
      });
    }
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
        setDuplicated((cur) => {
          return { ...cur, dupEmail: false };
        });
      })
      .catch(() => {
        setDuplicated((cur) => {
          return { ...cur, dupEmail: true };
        });
      });
    if (duplicated["dupEmail"] == true || regEmail.test(email) == false) {
      setIsOkInput((cur) => {
        return { ...cur, okEmail: false };
      });
    } else {
      setIsOkInput((cur) => {
        return { ...cur, okEmail: true };
      });
    }
  };

  const checkInputValue = () => {
    checkNickname();
    checkEmail();
    checkPhoneNum();
    checkPassword();
    if (
      isOkInput["okNickname"] &&
      isOkInput["okEmail"] &&
      isOkInput["okPhoneNum"] &&
      isOkInput["okPassword"]
    ) {
      submitSigninData();
    }
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
            {duplicated["dupEmail"]
              ? "중복된 이메일입니다"
              : "이메일 형식을 확인해주세요"}
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
            {duplicated["dupNickname"]
              ? "중복된 닉네임입니다"
              : "사용할 수 없는 닉네임입니다"}
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
        <Button
          className="nextBtn"
          onClick={() => {
            setIsClicked(true);
            checkInputValue();
          }}
        >
          다음
        </Button>
      </CenterWrapper>
    </>
  );
}
export default SignUpInput;
