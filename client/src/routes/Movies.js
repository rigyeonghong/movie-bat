import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Carousel/Slider";
import { movieInfo, bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";
function Movies() {
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    // const movieGenre = "다큐멘터리";
    const call = async () => {
      const response = await axios.get(`/main`).then((res) => res.data);
      console.log(response);
      setMovieInfo(response);
    };
    call();
  }, []);

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
