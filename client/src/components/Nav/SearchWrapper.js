import React, { useState, useRef } from "react";
import axios from "axios";
import { Menu, MenuItem } from "../../styles/theme";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, FormControl } from "react-bootstrap";
import searchIcon from "../../assets/search.svg";
function SearchWrapper() {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const onClick = () => setShowInput(!showInput);
  const handleEnter = () => {
    if (inputText.length > 1) {
      navigate(`/search/${inputText}/`);
    } else {
      alert("검색어를 2글자 이상 입력해주세요");
    }
  };
  return (
    <>
      <Form className="d-flex">
        <FormControl
          style={{ visibility: showInput ? "hidden" : "", width: "250px" }}
          type="search"
          placeholder="영화 제목, 감독, 장르로 검색하기"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.charCode === 13) handleEnter();
          }}
        />
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            setShowInput(!showInput);
          }}
          style={{
            padding: "4px",
            backgroundColor: "transparent",
            border: "none",
            marginRight: "10px",
          }}
        >
          <img src={searchIcon} />
        </button> */}
      </Form>
    </>
  );
}
export default SearchWrapper;
