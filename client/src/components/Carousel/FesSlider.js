import React, { useState, useRef } from "react";
import {
  SliderContainer,
  SlideItemContainer,
  SlideLeftBtn,
  SlideRightBtn,
} from "../../styles/theme";
import {
  SlideItemWrapper,
  SlideMoviePoster,
  SlideMovieTitle,
} from "../../styles/theme";
function FesSlide({ title, index, setCurIndex, src }) {
  return (
    <SlideItemWrapper onClick={() => setCurIndex(index)}>
      <SlideMoviePoster src={src} />
      <SlideMovieTitle>{title}</SlideMovieTitle>
    </SlideItemWrapper>
  );
}

export default FesSlide;
