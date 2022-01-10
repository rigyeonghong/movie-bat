import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputItemWrapper, CenterWrapper } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { signinState } from "../../state";
import RegionQuestion from "./RegionQuestion";
import GenreQuestion from "./GenreQuestion";
import RunningtimeQuestion from "./RunningtimeQuestion";

function TasteInput() {
  const [masterpiece, setMasterpiece] = useState([]);
  const navigate = useNavigate();
  const signinValue = useRecoilValue(signinState);
  const [genreChecked, setGenreChecked] = useState([-1, -1]);
  const [runningtimeChecked, setRunningtimeChecked] = useState(-1);
  const [regionChecked, setRegionChecked] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const tasteList = [
    <GenreQuestion
      masterpiece={masterpiece}
      genreChecked={genreChecked}
      setGenreChecked={setGenreChecked}
    />,
    <RunningtimeQuestion
      runningtimeChecked={runningtimeChecked}
      setRunningtimeChecked={setRunningtimeChecked}
    />,
    <RegionQuestion
      regionChecked={regionChecked}
      setRegionChecked={setRegionChecked}
      signupLoading={signupLoading}
    />,
  ];

  useEffect(() => {
    const getMasterpiece = async () => {
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + "/masterpiece")
        .then((res) => res.data);
      setMasterpiece(response);
    };
    getMasterpiece();
  }, []);

  const postSignInData = async () => {
    setSignupLoading(true);
    const response = await axios
      .post("/auth/signup", {
        nickname: signinValue[0],
        email: signinValue[1],
        phoneNum: signinValue[2],
        password: signinValue[3],
        genre1: genreChecked[0],
        genre2: genreChecked[1],
        runningtime: runningtimeChecked,
        region: regionChecked,
      })
      .then((res) => res.data);
    setSignupLoading(false);
    if (response.result == "fail") {
      alert("회원가입 실패");
    } else {
      alert("회원가입이 완료되었습니다!");
      navigate("/auth/signin");
    }
  };

  const [pageNum, setPageNum] = useState(0);

  const handleNextBtn = () => {
    if (pageNum == 0) {
      genreChecked.indexOf(-1) < 0
        ? setPageNum((cur) => cur + 1)
        : alert("두 개의 영화를 선택해주세요!");
    } else if (pageNum == 1) {
      runningtimeChecked < 0
        ? alert("선호하는 러닝타임을 선택해주세요!")
        : setPageNum((cur) => cur + 1);
    } else {
      postSignInData();
    }
  };
  return (
    <InputItemWrapper style={{ width: "70vw" }}>
      {Object.keys(masterpiece).length ? tasteList[pageNum] : ""}
      <CenterWrapper>
        <Button
          variant="danger"
          className="nextBtn"
          onClick={() => handleNextBtn()}
        >
          {pageNum == pageNum.length - 1 ? "제출" : "다음"}
        </Button>
      </CenterWrapper>
    </InputItemWrapper>
  );
}
export default TasteInput;
