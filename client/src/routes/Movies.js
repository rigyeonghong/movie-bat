import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Carousel/Slider";
import { bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";
<<<<<<< HEAD
function Movies() {
  const [movieInfo, setMovieInfo] = useState([]);
=======

function Movies() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [kooMovie, setKooMovie] = useState([]);
  const [lastYearMovie, setLastYearMovie] = useState([]);
  const [seoulMovie, setSeoulMovie] = useState([]);
>>>>>>> master
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      setIsLoading(true);
<<<<<<< HEAD
      const response = await axios.get(`/main`).then((res) => res.data);
      setMovieInfo(response);
=======
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
>>>>>>> master
      setIsLoading(false);
    };
    call();
  }, []);
<<<<<<< HEAD

  let slideList = [];
  for (let i = 0; i < Object.keys(movieInfo).length; i++) {
    slideList.push(<Slider key={i} subject={movieInfo[i]} />);
  }
=======
>>>>>>> master
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
<<<<<<< HEAD
        <>{slideList}</>
=======
        <>
          {Object.values(movieInfo).map((item, index) => (
            <Slider subject={item} subjectNum={index} />
          ))}
          {<Slider subject={kooMovie} subjectNum={4} />}
          {<Slider subject={lastYearMovie} subjectNum={5} />}
          {<Slider subject={seoulMovie} subjectNum={6} />}
        </>
>>>>>>> master
      )}
    </>
  );
}
export default Movies;
