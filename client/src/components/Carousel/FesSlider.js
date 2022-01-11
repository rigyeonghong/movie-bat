import React, { useState, useRef } from "react";
import {
  SliderContainer,
  SlideItemContainer,
  SlideLeftBtn,
  SlideRightBtn,
  SlideMovieEmptyPic,
  SlideItemWrapper,
  SlideMoviePoster,
  SlideMovieTitle,
} from "../../styles/theme";

function FesSlide({ title, index, setCurIndex, src }) {
  return (
    <SlideItemWrapper onClick={() => setCurIndex(index)}>
      {src ? (
        <SlideMoviePoster src={src} />
      ) : (
        <SlideMovieEmptyPic>
          <p style={{ position: "absolute", top: "5px", left: "5px" }}>
            No Picture !
          </p>
        </SlideMovieEmptyPic>
      )}
      <SlideMovieTitle>{title}</SlideMovieTitle>
    </SlideItemWrapper>
  );
}

export default FesSlide;
