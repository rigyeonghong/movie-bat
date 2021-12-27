import React from "react";
import {
  SlideItemWrapper,
  SlideMoviePoster,
  SlideMovieTitle,
} from "../../styles/theme";
function Slide({ url, title }) {
  return (
    <SlideItemWrapper>
      <SlideMoviePoster src={url} />
      <SlideMovieTitle>{title}</SlideMovieTitle>
    </SlideItemWrapper>
  );
}

export default Slide;
