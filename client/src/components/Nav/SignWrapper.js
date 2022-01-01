import React, { useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "../../state";
import { Sign, Profile } from "../../styles/theme";
import { Link } from "react-router-dom";
import profile from "../../assets/user.png";
import UserMenu from "./UserMenu";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignWrapper() {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const navigate = useNavigate();
  return (
    <>
      {user[0] === null && user[1] === null ? (
        <Button variant="primary" href="/auth/signin">
          로그인 해!
        </Button>
      ) : (
        <>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              {user[1]}님! 안녕하세요:)
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/like">찜한 영화</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  navigate("/");
                  resetUser();
                }}
              >
                로그아웃
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </>
  );
}
export default SignWrapper;
