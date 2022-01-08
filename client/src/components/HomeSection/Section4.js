import React from "react";
import { Section } from "../../styles/theme";
import posterBg from "../../assets/posterBg.JPEG";
function Section4() {
  return (
    <Section
      style={{
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${posterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        overflow: "hidden",
        height: "88vh",
      }}
    >
      <h2 style={{ fontWeight: "800", fontSize: "40px", lineHeight: 1.5 }}>
        영화밭에서는 2000년부터 2021년까지
        <br />
        전국 독립, 단편 영화제에 출품한 3,000여개의 작품을 소개합니다.
        <br />
        원하는 장르, 좋아하는 영화와 비슷한 영화를 확인해보세요!
      </h2>
    </Section>
  );
}
export default Section4;
