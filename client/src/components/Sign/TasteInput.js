import React, { useState } from "react";
import axios from "axios";
import { InputItemWrapper, LoginBtn, SignItemTitle } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { genreList, timeList, regionList } from "../../variables";
import { useRecoilValue } from "recoil";
import { signinState } from "../../state";

function TasteInput() {
  const navigate = useNavigate();
  const signinValue = useRecoilValue(signinState);

  const postSignInData = async () => {
    const response = await axios
      .post("/auth/signup", {
        nickname: signinValue[0],
        email: signinValue[1],
        phoneNum: signinValue[2],
        password: signinValue[3],
        genre,
        runningtime,
        region,
      })
      .then((res) => res.data);

    if (response.result == "fail") {
      alert("회원가입 실패");
    } else {
      alert("회원가입이 완료되었습니다!");
      navigate("/auth/signin");
    }
  };

  const [genre, setGenre] = useState(null);
  const [runningtime, setRunningTime] = useState(null);
  const [region, setRegion] = useState(null);

  const handleRegion = (val) => setRegion(val);
  const handleGenre = (val) => setGenre(val);
  const handleRunningTime = (val) => setRunningTime(val);

  return (
    <>
      <InputItemWrapper>
        <SignItemTitle htmlFor="genre">선호하는 장르</SignItemTitle>
        <br />
        <ToggleButtonGroup
          type="radio"
          name="genre"
          value={genre}
          onChange={handleGenre}
        >
          {genreList.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`genre-${idx}`}
              type="radio"
              variant={"outline-secondary"}
              name="genre"
              value={item.value}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </InputItemWrapper>

      <InputItemWrapper>
        <SignItemTitle htmlFor="time">선호하는 러닝타임</SignItemTitle>
        <br />
        <ToggleButtonGroup
          type="radio"
          name="runningtime"
          value={runningtime}
          onChange={handleRunningTime}
        >
          {timeList.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`runningtime-${idx}`}
              type="radio"
              variant={"outline-secondary"}
              name="runningtime"
              value={item.value}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </InputItemWrapper>

      <InputItemWrapper>
        <SignItemTitle htmlFor="region">거주 지역</SignItemTitle>
        <br />
        <ToggleButtonGroup
          size="lg"
          type="radio"
          name="region"
          value={region}
          onChange={handleRegion}
        >
          {regionList.map((i, idx) => (
            <ToggleButton
              key={idx}
              id={`region-${idx}`}
              type="radio"
              variant={"outline-secondary"}
              name="region"
              value={i.value}
            >
              {i.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </InputItemWrapper>

      <br />
      <LoginBtn type="submit" onClick={() => postSignInData()}>
        회원가입
      </LoginBtn>
    </>
  );
}
export default TasteInput;
