import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Carousel/Slider";
import { bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";

function Movies() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [kooMovie, setKooMovie] = useState([]);
  const [lastYearMovie, setLastYearMovie] = useState([]);
  const [seoulMovie, setSeoulMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      setIsLoading(true);
      const response = await axios.get(`/main/`).then((res) => res.data);
      const response2 = await axios
        .get(`/main/actor/구교환`)
        .then((res) => res.data);
      const response3 = await axios
        .get(`/main/prodyear/2021`)
        .then((res) => res.data);
      const response4 = await axios
        .get(`/main/director/이옥섭`)
        .then((res) => res.data);
      const response5 = await axios
        .get(`/main/entry/서울독립영화제`)
        .then((res) => res.data);
      setMovieInfo(response);
      setKooMovie(response2);
      setLastYearMovie(response3);
      setSeoulMovie(response5);
      setIsLoading(false);
    };
    call();
  }, []);
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
        <>
          {Object.values(movieInfo).map((item, index) => (
            <Slider subject={item} subjectNum={index} />
          ))}
          {<Slider subject={kooMovie} subjectNum={4} />}
          {<Slider subject={lastYearMovie} subjectNum={5} />}
          {<Slider subject={seoulMovie} subjectNum={6} />}
        </>
      )}
    </>
  );
}
export default Movies;
