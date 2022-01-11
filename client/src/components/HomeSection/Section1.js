import React from "react";
import { Section } from "../../styles/theme";
import { Button } from "react-bootstrap";
import section1Bg from "../../assets/section1Bg.png";
// import { Link } from "react-router-dom";
function Section1() {
  return (
    <Section
      id="sec1"
      style={{
        justifyContent: "center",
        backgroundImage: `url(${section1Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        overflow: "hidden",
        height: "88vh",
      }}
    >
      <div>
        <h1 style={{ fontWeight: "800", fontSize: "80px", marginTop: "100px" }}>
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
          <a href="/movies">
            <Button
              style={{
                border: "none",
                textAlign: "center",
                width: "200px",
                height: "50px",
                fontSize: "20px",
                backgroundColor: "#f15a24",
              }}
            >
              시작하기
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
export default Section1;
