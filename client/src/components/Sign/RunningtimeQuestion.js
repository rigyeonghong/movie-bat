import React from "react";
import {
  CenterDescriptionWrapper,
  CenterTitleWrapper,
} from "../../styles/theme";
import { ToggleButton } from "react-bootstrap";
import { timeList } from "../../variables";

<<<<<<< HEAD
function RunningtimeQuestion({ runningtime, setRunningtime }) {
=======
function RunningtimeQuestion({ runningtimeChecked, setRunningtimeChecked }) {
>>>>>>> master
  return (
    <>
      <CenterTitleWrapper>선호하는 러닝타임</CenterTitleWrapper>
      <CenterDescriptionWrapper>
        즐겨보시는 길이의 컨텐츠로 추천해드릴게요:)
      </CenterDescriptionWrapper>
<<<<<<< HEAD
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
=======
      <div style={{ textAlign: "center" }}>
        {timeList.map((item, idx) => (
          <ToggleButton
            key={idx}
            id={`runningtime-${idx}`}
            type="radio"
            variant={"outline-secondary"}
            name="runningtime"
            value={item.value}
            className="tasteItem"
            onChange={(e) => setRunningtimeChecked(e.currentTarget.value)}
            checked={runningtimeChecked === item.value}
          >
            {item.name}
          </ToggleButton>
        ))}
      </div>
>>>>>>> master
    </>
  );
}
export default RunningtimeQuestion;
