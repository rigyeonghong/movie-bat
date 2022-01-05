import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navigation";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
function Like() {
  const user = useRecoilValue(userState);
  useEffect(() => {
    const call = async () => {
      const response = await axios
        // TODO 이따 user_idx 생기면 그때 받는걸로
        .get(`/favorite/`)
        .then((res) => res.data);
      console.log(response);
    };
    call();
  }, []);
  return (
    <>
      <Nav />
      <p>영 화 조 아</p>
    </>
  );
}
export default Like;
