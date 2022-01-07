import React from "react";
import Nav from "../components/Navigation";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { useEffect, useRef } from "react";
import "./HomeCSS.css";

var moveToTopSmooth = function() {document.getElementById("s1").scrollIntoView({ behavior: 'smooth' });};

function Home() {
  const outerRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else {
          outerRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          outerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerRef} className="outer">
      <Nav />
      <div className="sections s1" id="s1">1</div>
      <div className="sections s2">2</div>
      <div className="sections s3">3<button onClick={moveToTopSmooth}>moveToTopBtn</button></div>
    </div>
  );
}

export default Home;
