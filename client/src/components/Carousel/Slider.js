import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import {
  SliderContainer,
  SlideItemContainer,
  SlideLeftBtn,
  SlideRightBtn,
  BoldTitle,
} from "../../styles/theme";
import { ReactComponent as Left } from "../../assets/left.svg";
import { ReactComponent as Right } from "../../assets/right.svg";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
function Slider({ subject, subjectNum }) {
  const user = useRecoilValue(userState);
  const subjectNameList = [
    `${user["userNickname"]}님을 위한 추천`,
    `밭고리즘`,
    `#적당한_러닝타임`,
    "어워드 수상 영화",
    `화제의 배우, 구교환`,
    `2021년 제작 영화`,
    `서울독립영화제 추천작`,
  ];
  let subjectName = subjectNameList[subjectNum];
  let movie_list = Object.values(subject).map((item, index) => (
    <Slide
      key={index}
      title={item["movie_title"]}
      url={item["movie_posterUrl"]}
      movieIdx={item["movie_idx"]}
    />
  ));
  const TOTAL_SLIDES = parseInt(movie_list.length / 6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <SliderContainer>
      {movie_list.length ? <BoldTitle>{subjectName}</BoldTitle> : <></>}
      <SlideItemContainer ref={slideRef}>{movie_list}</SlideItemContainer>
      <SlideLeftBtn onClick={() => prevSlide()}>
        <Left width="35" height="35" fill="white" />
      </SlideLeftBtn>
      <SlideRightBtn onClick={() => nextSlide()}>
        <Right width="35" height="35" fill="white" />
      </SlideRightBtn>
    </SliderContainer>
  );
}
export default Slider;
