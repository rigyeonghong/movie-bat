import React from "react";
import { Section } from "../../styles/theme";
import { LineGraph1 } from "../Graphs";
function Section2() {
  return (
    <Section style={{ flexDirection: "column", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "15vh",
        }}
      >
        <LineGraph1 />
        <LineGraph1 />
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
