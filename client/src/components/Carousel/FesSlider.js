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
function FesSlide({ title, index, setCurIndex }) {
  return (
    <SlideItemWrapper onClick={() => setCurIndex(index)}>
      <SlideMoviePoster src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MDhfMjYz%2FMDAxNTkxNjIyMDQ4OTg4.IRZK7PwKCJ_AhSIwYTm4yh-r0TO_hA1RiNJ-G5DpUIgg.TOaqU-Shf2vrs7qrCyCrYWtJ1q9YKZwcIbvhh943gX4g.JPEG.kueric12%2FNAVER-lOGO.jpg" />
      <SlideMovieTitle>{title}</SlideMovieTitle>
    </SlideItemWrapper>
  );
}

export default FesSlide;
