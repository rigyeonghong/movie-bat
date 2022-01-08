import React, { useState } from "react";
import {
  CenterTitleWrapper,
  CenterDescriptionWrapper,
  MovieDetailMainInfo,
  MovieDetailTitle,
} from "../../styles/theme";
import { Button, Container, Col, Row } from "react-bootstrap";
import checkIcon from "../../assets/check2.svg";

function GenreQuestion({ masterpiece, genreChecked, setGenreChecked }) {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [hoverIdx, setHoverIdx] = useState(0);
  console.log(genreChecked);
  const selectMovie = (i) => {
    let where = genreChecked.indexOf(i);
    let empty = genreChecked.indexOf(-1);
    let newgenreChecked = [...genreChecked];
    // -1, 새로 들어온 경우
    if (0 > where) {
      // 자리가 없을때
      if (0 > empty) console.log("자리없어욧");
      else {
        // 자리 있을때
        newgenreChecked[empty] = i;
        setGenreChecked(newgenreChecked);
      }
    } else {
      newgenreChecked[where] = -1;
      setGenreChecked(newgenreChecked);
    }
  };
  const temp = [];
  for (let i = 0; i < Object.keys(masterpiece).length; i++) {
    temp.push(
      <Col sm={2}>
        <button
          style={{ border: "none", position: "relative" }}
          onClick={() => selectMovie(hoverIdx)}
        >
          <img
            style={{ width: "150px", height: "200px" }}
            src={masterpiece[i]["masterpiece_img_link"]}
            onMouseOver={() => setHoverIdx(i)}
          />
          <img
            className={genreChecked.indexOf(i) < 0 ? "isHidden" : ""}
            style={{
              position: "absolute",
              zIndex: 999,
              top: 0,
              left: 0,
            }}
            src={checkIcon}
          />
        </button>
      </Col>
    );
  }
  const First = () => {
    return (
      <>
        <Container>
          <Row style={{ justifyContent: "space-evenly" }}>
            {temp.slice(0, 3)}
          </Row>
          <Row style={{ justifyContent: "space-evenly" }}>
            {temp.slice(3, 6)}
          </Row>
          <Row style={{ justifyContent: "space-evenly" }}>
            {temp.slice(6, 9)}
          </Row>

          <Button
            variant="outline-dark"
            style={{ width: "150px", float: "right", color: "white" }}
            onClick={() => setIsFirstPage(!isFirstPage)}
          >
            다른 장르 선택
          </Button>
        </Container>
      </>
    );
  };
  const Second = () => {
    return (
      <>
        <Container style={{ flexDirection: "column" }}>
          <Row style={{ justifyContent: "space-evenly" }}>
            {temp.slice(9, 12)}
          </Row>
          <Row style={{ justifyContent: "space-evenly" }}>
            {temp.slice(12, 15)}
          </Row>
          <Row style={{ justifyContent: "space-evenly" }}>
            {temp.slice(15, 18)}
          </Row>

          <Button
            style={{ width: "150px", float: "right" }}
            onClick={() => setIsFirstPage(!isFirstPage)}
          >
            다른 장르 선택
          </Button>
        </Container>
      </>
    );
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CenterTitleWrapper>선호하는 장르</CenterTitleWrapper>
        <p style={{ textAlign: "center" }}>
          좋아하는 영화를 두 가지 선택해주세요!
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ width: "40vw", display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", height: "400px" }}>
            <img
              style={{ width: "280px", height: "400px", paddingRight: "20px" }}
              src={masterpiece[hoverIdx]["masterpiece_img_link"]}
            />
            <div>
              <MovieDetailTitle style={{ paddingRight: 0 }}>
                {masterpiece[hoverIdx]["masterpiece_title"]}
              </MovieDetailTitle>
              <MovieDetailMainInfo>
                <b>장르</b> {masterpiece[hoverIdx]["masterpiece_genre"]}
              </MovieDetailMainInfo>
              <MovieDetailMainInfo>
                <b>감독</b> {masterpiece[hoverIdx]["masterpiece_director"]}
              </MovieDetailMainInfo>
            </div>
          </div>

          <div style={{ width: "500px" }}>
            <hr />
            {masterpiece[hoverIdx]["masterpiece_plot"]}
          </div>
        </div>
        {isFirstPage ? <First /> : <Second />}
      </div>
    </>
  );
}
export default GenreQuestion;
