import React, { useState } from "react";
import axios from "axios";
import {
  CenterDescriptionWrapper,
  CenterTitleWrapper,
} from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { genreList, timeList, regionList } from "../../variables";
import { useRecoilValue } from "recoil";
import { signinState } from "../../state";

function RegionQuestion() {
  const signinValue = useRecoilValue(signinState);

  const [region, setRegion] = useState(null);
  const handleRegion = (val) => setRegion(val);
  const temp = [];
  for (let i = 0; i < regionList.length; i++) {
    temp.push(
      <ToggleButton
        key={i}
        id={`region-${i}`}
        type="radio"
        variant={"outline-secondary"}
        name="region"
        value={regionList[i].value}
        onChange={(e) => setRegion(e.currentTarget.value)}
        checked={region === regionList[i].value}
        className="tasteItem"
      >
        {regionList[i].name}
      </ToggleButton>
    );
    if (i % 4 == 3) {
      temp.push(<br />);
    }
  }
  return (
    <>
      <CenterTitleWrapper>거주 지역</CenterTitleWrapper>
      <CenterDescriptionWrapper>
        지역에 개최하는 영화제를 소개해드려요!
      </CenterDescriptionWrapper>

      {temp}
    </>
  );
}
export default RegionQuestion;
