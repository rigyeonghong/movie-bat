import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
function SignWrapper() {
  const user = useRecoilValue(userState);
  return (
    <>
      {user ? <span>{user}님! 어서오십셔!</span> : <button>로그인 해!</button>}
    </>
  );
}
export default SignWrapper;
