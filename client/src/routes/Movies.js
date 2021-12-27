import React from "react";
import Slider from "../components/Carousel/Slider";
import { movieInfo } from "../dummy";

function Movies() {
  let slideList = [];

  for (let i = 0; i < Object.keys(movieInfo).length; i++) {
    slideList.push(<Slider key={i} subject={movieInfo[i]} />);
  }

  return (
    <>
      {slideList}
      <p>영화 소개 페이지입니다리미</p>
    </>
  );
}
export default Movies;
