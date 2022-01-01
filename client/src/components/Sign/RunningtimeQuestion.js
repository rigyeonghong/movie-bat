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

function RunningtimeQuestion() {
  const navigate = useNavigate();
  const signinValue = useRecoilValue(signinState);

  const [runningtime, setRunningtime] = useState(null);
  const handleRunningtime = (val) => setRunningtime(val);

  return (
    <>
      <CenterTitleWrapper>선호하는 러닝타임</CenterTitleWrapper>
      <CenterDescriptionWrapper>
        즐겨보시는 길이의 컨텐츠로 추천해드릴게요:)
      </CenterDescriptionWrapper>
      {timeList.map((item, idx) => (
        <ToggleButton
          key={idx}
          id={`runningtime-${idx}`}
          type="radio"
          variant={"outline-secondary"}
          name="runningtime"
          value={item.value}
          className="tasteItem"
          onChange={(e) => setRunningtime(e.currentTarget.value)}
          checked={runningtime === item.value}
        >
          {item.name}
        </ToggleButton>
      ))}
    </>
  );
}
export default RunningtimeQuestion;
