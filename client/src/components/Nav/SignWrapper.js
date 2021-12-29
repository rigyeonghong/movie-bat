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
      {user ? (
        <>
          <Profile
            src={profile}
            onMouseOver={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          />
          {isVisible ? <UserMenu /> : ""}
        </>
      ) : (
        <button>
          <Link to="/auth/signin">로그인 해!</Link>
        </button>
      )}
    </Sign>
  );
}
export default SignWrapper;
