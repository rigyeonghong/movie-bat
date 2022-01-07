import React from "react";
import {
  CenterDescriptionWrapper,
  CenterTitleWrapper,
} from "../../styles/theme";
import { ToggleButton } from "react-bootstrap";
import { regionList } from "../../variables";

function RegionQuestion({ regionChecked, setRegionChecked }) {
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
