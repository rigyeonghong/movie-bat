import React from "react";
import {
  BigSlideMovieImg,
  SlideItemWrapper,
  SlideMoviePoster,
  SlideMovieTitle,
} from "../../styles/theme";
function BigSlide({ url, title, description }) {
  return (
    <SlideItemWrapper>
      <BigSlideMovieImg src={url} />
      <SlideMovieTitle>{title}</SlideMovieTitle>
      <p>{description}</p>
    </SlideItemWrapper>
  );
}

export default BigSlide;
