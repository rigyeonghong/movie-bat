import React from "react";
import { Section } from "../../styles/theme";
import { BarGraph1, BarGraph2, BarGraph3 } from "../Graphs";
function Section2() {
  return (
    <Section
      style={{ flexDirection: "column", justifyContent: "center", zIndex: "3" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "15vh",
        }}
      >
        <BarGraph1 />
        <BarGraph2 />
      </div>
      <h2 style={{ fontWeight: "800" }}>What are good movies?</h2>
      <h2 style={{ textAlign: "center", fontWeight: "700" }}>
        오랜 코로나 기간, 영화를 OTT 서비스 안에서만
        <br />
        소비하고 계시지는 않나요?
      </h2>
    </Section>
  );
}
export default Section2;
