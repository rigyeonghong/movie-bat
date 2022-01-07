import React, { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router";
import { BoldTitle } from "../styles/theme";
import rabbit from "../assets/rabbit.jpg";

function PageNotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timeout = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timeout);
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div>
      <img style={{ width: "300px" }} src={rabbit} alt="토끼" />
      <BoldTitle>잘못된 접근입니다</BoldTitle>
      <BoldTitle>{count}초 후 메인 페이지로 이동돼요😓</BoldTitle>
    </div>
  );
}
export default PageNotFound;
