import React, { useState } from "react";
import axios from "axios";
import {
  InputItemWrapper,
  LoginBtn,
  SignItemTitle,
  CenterTitleWrapper,
  CenterDescriptionWrapper,
} from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { genreList, timeList, regionList } from "../../variables";
import { useRecoilValue } from "recoil";
import { signinState } from "../../state";

function GenreQuestion() {
  const navigate = useNavigate();
  const signinValue = useRecoilValue(signinState);

  const [genre, setGenre] = useState(null);
  const handleGenre = (val) => setGenre(val);
  const temp = [];
  for (let i = 0; i < genreList.length; i++) {
    temp.push(
      <ToggleButton
        key={i}
        id={`genre-${i}`}
        type="radio"
        variant={"outline-secondary"}
        name="genre"
        value={genreList[i].value}
        onChange={(e) => setGenre(e.currentTarget.value)}
        checked={genre === genreList[i].value}
        className="tasteItem"
      >
        {genreList[i].name}
      </ToggleButton>
    );
    if (i % 3 == 2) {
      temp.push(<br />);
    }
  }
  return (
    <>
      <CenterTitleWrapper>선호하는 장르</CenterTitleWrapper>
      <CenterDescriptionWrapper>
        가장 즐겨보는 장르를 한 가지 선택해주세요!
      </CenterDescriptionWrapper>
      {temp}
    </>
  );
}
export default GenreQuestion;
