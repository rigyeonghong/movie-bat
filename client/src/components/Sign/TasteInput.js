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
  const [genre, setGenre] = useState(null);
  const [runningtime, setRunningtime] = useState(null);
  const [region, setRegion] = useState(null);
  const [masterpiece, setMasterpiece] = useState([]);
  const navigate = useNavigate();
  const signinValue = useRecoilValue(signinState);
  const tasteList = [
    <GenreQuestion
      genre={genre}
      setGenre={setGenre}
      masterpiece={masterpiece}
    />,
    <RunningtimeQuestion
      runningtime={runningtime}
      setRunningtime={setRunningtime}
    />,
    <RegionQuestion region={region} setRegion={setRegion} />,
  ];

  useEffect(() => {
    const getMasterpiece = async () => {
      const response = await axios.get("/masterpiece").then((res) => res.data);
      setMasterpiece(response);
    };
    getMasterpiece();
  }, []);

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

  const [pageNum, setPageNum] = useState(0);
  return (
    <InputItemWrapper style={{ width: "70vw" }}>
      {Object.keys(masterpiece).length ? tasteList[pageNum] : ""}
      <CenterWrapper>
        {pageNum == tasteList.length - 1 ? (
          <Button className="nextBtn" onClick={() => postSignInData()}>
            제출
          </Button>
        ) : (
          <>
            <Button
              className="nextBtn"
              onClick={() => setPageNum((cur) => cur + 1)}
            >
              다음
            </Button>
          </>
        )}
      </CenterWrapper>
    </InputItemWrapper>
  );
}
export default TasteInput;
