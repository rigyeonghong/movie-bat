import React, { useState, useRef } from "react";
import { Menu, MenuItem } from "../../styles/theme";
import { Link } from "react-router-dom";
import { Form, Button, FormControl } from "react-bootstrap";
import searchIcon from "../../assets/search.svg";
function SearchWrapper() {
  const [showInput, setShowInput] = useState(false);
  const onClick = () => setShowInput(!showInput);

  return (
    <>
      <Form className="d-flex">
        <FormControl
          style={{ visibility: showInput ? "hidden" : "" }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <button
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
        </button>
      </Form>
    </>
  );
}
export default SearchWrapper;
