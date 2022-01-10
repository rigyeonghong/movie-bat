import React, { useEffect, useState } from "react";
import axios from "axios";
import AllSlider from "../components/Carousel/AllSlider";
import { bigMovieInfo } from "../dummy";
import Nav from "../components/Navigation";
import BigCarousel from "../components/Carousel/BigCarousel";
function AllMovies() {
  const [allMovieInfo, setAllMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      setIsLoading(true);
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `/movies/all`)
        .then((res) => res.data);
      setAllMovieInfo(response);
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
          {Object.values(allMovieInfo).map((item) => (
            <AllSlider subject={item["movies"]} subjectTitle={item["genre"]} />
          ))}
        </>
      )}
    </>
  );
}
export default AllMovies;
