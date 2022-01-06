import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Nav from "../components/Navigation";
import FesSlider from "../components/Carousel/FesSlider";
import {
  SliderContainer,
  SlideItemContainer,
  SlideLeftBtn,
  SlideRightBtn,
} from "../styles/theme";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import Map from "../components/Map";
function Festival() {
  const [festivals, setFestivals] = useState([]);
  const [region, setRegion] = useState("서울");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const [mapLoading, setMapLoading] = useState(false);
  let festivalsList = [];
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

  useEffect(() => {
    setMapLoading(true);
    const call = async () => {
      const response = await axios
        .get(`/festivals/${region}`)
        .then((res) => res.data)
        .then(setMapLoading(false));
      setFestivals(response);
      console.log(response);
    };
    call();
  }, [region]);

  for (let i = 0; i < Object.keys(festivals).length; i++) {
    festivalsList.push(
      <FesSlider
        src={festivals[i]["festival_src"]}
        title={festivals[i]["festival_title"]}
        index={i}
        setCurIndex={setCurIndex}
      />
    );
  }
  let TOTAL_SLIDES = parseInt(festivalsList.length / 6);

  return (
    <>
      <Nav />
      <SliderContainer>
        <div style={{ marginTop: "5vh" }}>
          <h1 style={{ float: "left" }}>{region}에서 열리는 영화제</h1>
          <DropdownButton
            style={{ float: "right" }}
            id="dropdownRegion"
            title="지역 선택"
          >
            <Dropdown.Item onClick={() => setRegion("서울")}>
              서울
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("인천")}>
              인천
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("경상")}>
              경상
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("충청")}>
              충청
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("전라")}>
              전라
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("충청")}>
              충청
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("대전")}>
              대전
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("강원")}>
              강원
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setRegion("제주")}>
              제주
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <SliderContainer style={{ clear: "both" }}>
          <SlideItemContainer ref={slideRef}>
            {festivalsList}
          </SlideItemContainer>
          <SlideLeftBtn onClick={() => prevSlide()}>
            <Left width="35" height="35" fill="white" />
          </SlideLeftBtn>
          <SlideRightBtn onClick={() => nextSlide()}>
            <Right width="35" height="35" fill="white" />
          </SlideRightBtn>
        </SliderContainer>
        {mapLoading || festivals.length == 0 ? (
          <div style={{ textAlign: "center" }}>
            <iframe src="https://giphy.com/embed/Pm3tjwNGmIwQ1lqV3Q" />
            <div>영화제 목록 업데이트 중 !</div>
          </div>
        ) : (
          <Map
            title={festivals[curIndex]["festival_title"]}
            lat={festivals[curIndex]["festival_latitude"]}
            lon={festivals[curIndex]["festival_latlng"]}
            url={festivals[curIndex]["festival_link"]}
          />
        )}
      </SliderContainer>
    </>
  );
}
export default Festival;
