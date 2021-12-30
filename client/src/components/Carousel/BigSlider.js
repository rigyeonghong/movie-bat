import React, { useState, useEffect, useRef } from "react";
import BigSlide from "./BigSlide";
import {
  SliderContainer,
  SlideItemContainer,
  SlideLeftBtn,
  SlideRightBtn,
} from "../../styles/theme";

function BigSlider({ subject }) {
  const TOTAL_SLIDES = 2;
  let movie_list = subject.map((item, index) => (
    <BigSlide
      title={item.title}
      url={item.posterUrl}
      description={item.description}
      index={index}
    />
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
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }, [currentSlide]);
  console.log(movie_list);
  return (
    <SliderContainer>
      {/* <h2>{subjectName}</h2> */}
      <SlideItemContainer ref={slideRef}>{movie_list}</SlideItemContainer>
      <SlideLeftBtn onClick={prevSlide}>{"<"}</SlideLeftBtn>
      <SlideRightBtn onClick={nextSlide}>{">"}</SlideRightBtn>
    </SliderContainer>
  );
}
export default BigSlider;
