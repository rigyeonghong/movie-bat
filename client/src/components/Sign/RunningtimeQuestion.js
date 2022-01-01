import React from "react";
import {
  CenterDescriptionWrapper,
  CenterTitleWrapper,
} from "../../styles/theme";
import { ToggleButton } from "react-bootstrap";
import { timeList } from "../../variables";

function RunningtimeQuestion({ runningtime, setRunningtime }) {
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
