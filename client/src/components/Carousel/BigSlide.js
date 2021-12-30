import React from "react";
import {
  BigSlideMovieImg,
  BigSlideMovieTitle,
  BigSlideMovieDescription,
  SlideItemWrapper,
  Test2,
} from "../../styles/theme";
function BigSlide({ url, title, description, index }) {
  return (
    <SlideItemWrapper>
      <Test2>
        <BigSlideMovieImg src={url} />
        <BigSlideMovieTitle left={(index + 1) * 70 + "vw"}>
          {title}
        </BigSlideMovieTitle>
        <BigSlideMovieDescription>{description}</BigSlideMovieDescription>
      </Test2>
    </SlideItemWrapper>
  );
}

export default BigSlide;
