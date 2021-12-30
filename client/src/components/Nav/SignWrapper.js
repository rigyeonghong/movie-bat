import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
import { Sign, Profile } from "../../styles/theme";
import { Link } from "react-router-dom";
import profile from "../../assets/user.png";
import UserMenu from "./UserMenu";
function SignWrapper() {
  const user = useRecoilValue(userState);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Sign>
      {user[0] === null && user[1] === null ? (
        <button>
          <Link to="/auth/signin">로그인 해!</Link>
        </button>
      ) : (
        <>
          <Profile src={profile} onClick={() => setIsVisible((cur) => !cur)} />
          {isVisible ? <UserMenu /> : ""}
        </>
      )}
    </Sign>
  );
}
export default SignWrapper;
