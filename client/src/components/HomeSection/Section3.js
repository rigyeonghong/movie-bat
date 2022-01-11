import React from "react";
import { Section } from "../../styles/theme";
import serviceBg from "../../assets/serviceBg.JPEG";
function Section3() {
  return (
    <Section
      id="sec3"
      style={{
        justifyContent: "center",
        backgroundImage: `url(${serviceBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div>
        <h2 style={{ fontWeight: "800", fontSize: "60px" }}>
          다양성이 존재하는 영화밭,
          <br />
          창의성이 존재하는 영화밭.
        </h2>
        <h2 style={{ fontWeight: "600", fontSize: "30px" }}>
          OTT 시장 속 빛을 발하지 못한 영화를 소개합니다.
          <br />
          영화밭은 소비자에게 새로움을 제공하고
          <br />
          영화감독에게는 가치 창출의 기회를 제공합니다.
        </h2>
      </div>
    </Section>
  );
}
export default Section3;
