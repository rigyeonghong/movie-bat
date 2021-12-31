import React, { useEffect } from "react";
import axios from "axios";
import Slider from "../components/Carousel/Slider";
import { movieInfo, bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";
function Movies() {
  let movieList = "";
  // useEffect(() => {
  //   const call = async () => {
  //     const response = await axios.get("127.0.0.1/main");
  //     movieList = response.변수이름;
  //   };
  //   call();
  // }, []);

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
