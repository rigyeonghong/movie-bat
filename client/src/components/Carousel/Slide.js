import React from "react";
import styled from "styled-components";
import rabbit from "../../assets/rabbit.jpg";
function Slide({ url, title }) {
  return (
    <>
      <span>{title}</span>
      <IMG src={url} />
    </>
  );
}
const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
export default Slide;
