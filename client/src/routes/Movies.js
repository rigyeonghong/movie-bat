import React from "react";
import Slider from "../components/Carousel/Slider";
import { movieInfo, bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";
function Movies() {
  let slideList = [];
  for (let i = 0; i < Object.keys(movieInfo).length; i++) {
    slideList.push(<Slider key={i} subject={movieInfo[i]} />);
  }

  return (
    <>
      <Nav />
      <BigCarousel subject={bigMovieInfo} />
      {slideList}
    </>
  );
}
export default Movies;
