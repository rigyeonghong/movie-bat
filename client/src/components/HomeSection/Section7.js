import React from "react";
import { Section } from "../../styles/theme";
import bongBg from "../../assets/bong.JPEG";
function Section7() {
  return (
    <Section
      style={{
        backgroundImage: `url(${bongBg})`,
        flexDirection: "column",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div style={{ marginBottom: "100px", textAlign: "center" }}>
        <h2 style={{ fontWeight: "600", fontSize: "35px" }}>
          가장 개인적인 것이 가장 창의적인 것이다
        </h2>
        <h2 style={{ fontWeight: "600", fontSize: "35px" }}>
          OTT 바깥의 영화 세상, 영화밭에서 다양성을 일구어보세요
        </h2>
      </div>
    </Section>
  );
}
export default Section7;
