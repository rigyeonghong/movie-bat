import React from "react";
import Nav from "../components/Navigation";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
function Home() {
  const user = useRecoilValue(userState);
  console.log(user);
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>home페이지입니다리미</p>
    </>
  );
}
export default Home;
