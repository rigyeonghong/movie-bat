import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import {
  SliderContainer,
  SlideItemContainer,
  SlideLeftBtn,
  SlideRightBtn,
} from "../../styles/theme";

function Slider({ subject }) {
  const TOTAL_SLIDES = 2;
  let subjectName = subject["subjectTitle"];
  let movie_list = subject["movies"].map((item) => (
    <Slide title={item.title} url={item.posterUrl} />
  ));

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
  console.log(movie_list);
  return (
    <SliderContainer>
      <h2>{subjectName}</h2>
      <SlideItemContainer ref={slideRef}>{movie_list}</SlideItemContainer>
      <SlideLeftBtn onClick={() => prevSlide()}>{"<"}</SlideLeftBtn>
      <SlideRightBtn onClick={() => nextSlide()}>{">"}</SlideRightBtn>
    </SliderContainer>
  );
}
export default Slider;
