import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Carousel/Slider";
import { bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";
function Movies() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      setIsLoading(true);
      const response = await axios.get(`/main`).then((res) => res.data);
      setMovieInfo(response);
      setIsLoading(false);
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
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <iframe src="https://giphy.com/embed/Pm3tjwNGmIwQ1lqV3Q" />
          <div>영화목록 업데이트 중 !</div>
        </div>
      ) : (
        <>{slideList}</>
      )}
    </>
  );
}
export default Movies;
