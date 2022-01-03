import React from "react";
import { Link } from "react-router-dom";
import {
  SlideItemWrapper,
  SlideMoviePoster,
  SlideMovieTitle,
} from "../../styles/theme";
function Slide({ url, title, movieIdx }) {
  return (
    <SlideItemWrapper>
      <Link to={`/movies/detail/${movieIdx}`}>
        <SlideMoviePoster src={url} />
        <SlideMovieTitle>{title}</SlideMovieTitle>
      </Link>
    </SlideItemWrapper>
  );
}

export default Slide;
