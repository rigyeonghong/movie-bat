import React from "react";
import { Link } from "react-router-dom";
import TasteInput from "../components/Sign/TasteInput";
import { FlexWrapper, SignLogo } from "../styles/theme";
import Logo from "../assets/logo_test.png";
function KakaoLogin() {
  return (
    <>
      <FlexWrapper>
        취향 선택 페이지!
        <Link to="/">
          <SignLogo src={Logo} />
        </Link>
      </FlexWrapper>
      <TasteInput />
    </>
  );
}
export default KakaoLogin;
