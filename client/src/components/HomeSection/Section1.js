import React from "react";
import { Section } from "../../styles/theme";
import { Button } from "react-bootstrap";
function Section1() {
  return (
    <Section style={{ justifyContent: "center" }}>
      <div>
        <h1 style={{ fontWeight: "800", fontSize: "80px" }}>
          GOOD
          <br />
          MOVIES ARE
          <br />
          EVERYWHERE
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "7vh",
          }}
        >
          <Button
            style={{
              textAlign: "center",
              width: "200px",
              height: "50px",
              fontSize: "20px",
            }}
          >
            시작하기
          </Button>
        </div>
      </div>
    </Section>
  );
}
export default Section1;
