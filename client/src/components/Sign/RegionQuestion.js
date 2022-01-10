import React from "react";
import {
  CenterDescriptionWrapper,
  CenterTitleWrapper,
} from "../../styles/theme";
import { ToggleButton } from "react-bootstrap";
import { regionList } from "../../variables";

function RegionQuestion({ regionChecked, setRegionChecked, signupLoading }) {
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
        onChange={(e) => setRegionChecked(e.currentTarget.value)}
        checked={regionChecked === regionList[i].value}
        className="tasteItem"
      >
        {regionList[i].name}
      </ToggleButton>
    );
    if (i % 3 == 2) {
      temp.push(<br />);
    }
  }
  return (
    <>
      <CenterTitleWrapper>거주 지역</CenterTitleWrapper>
      {
        <div
          style={{
            textAlign: "center",
            display: signupLoading ? "absolute" : "none",
          }}
        >
          <iframe src="https://giphy.com/embed/Pm3tjwNGmIwQ1lqV3Q" />
          <div>잠시만 기다려 주세요...</div>
        </div>
      }
      <CenterDescriptionWrapper>
        지역에 개최하는 영화제를 소개해드려요!
      </CenterDescriptionWrapper>
      <div style={{ textAlign: "center" }}> {temp}</div>
    </>
  );
}
export default RegionQuestion;
