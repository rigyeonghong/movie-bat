import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import pic from "../../assets/rabbit.jpg";

const Container = styled.div`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 안보이도록
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지 가로 나열
`;

function Slider({ subject }) {
  console.log(subject);
  const TOTAL_SLIDES = subject.length;
  let subjectName = subject["subjectTitle"];
  let movie_list = subject["movies"].map((item) => (
    <Slide title={item.title} url={item.posterUrl} />
  ));
  console.log(movie_list);
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
    <Container>
      <h1>{subjectName}</h1>
      <SliderContainer ref={slideRef}>{movie_list}</SliderContainer>
      <button onClick={prevSlide}>Previous Slide</button>
      <button onClick={nextSlide}>Next Slide</button>
    </Container>
  );
}
export default Slider;
