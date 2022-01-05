import styled from "styled-components";
import { Link } from "react-router-dom";

export const CenterWrapper = styled.div`
  text-align: center;
`;
export const CenterTitleWrapper = styled.h4`
  text-align: center;
`;
export const CenterDescriptionWrapper = styled.h6`
  text-align: center;
`;
export const FlexContainer = styled.div`
  display: flex;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const NavContainer = styled.div`
  position: fixed;
  // top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //   background-color: rgba(42, 15, 15, 0.2);
  background: pink;
  z-index: 100;
`;
export const Menu = styled.ul`
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin: auto 0;
`;

export const Sign = styled.div`
  justify-content: flex-end;
`;

export const MenuItem = styled.li`
  list-style: none;
`;
export const HomeLogo = styled.div`
  justify-content: left;
  display: flex;
  align-items: center;
`;
export const Profile = styled.img`
  width: 64px;
  height: 64px;
`;
export const Dropdown = styled.div``;
export const DropdownItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;
export const SliderContainer = styled.div`
  overflow: hidden;
  max-width: 80vw;
  margin: 0 auto;
  position: relative;
  display: block;
`;
export const SlideItemContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const SlideItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SlideMoviePoster = styled.img`
  width: 13vw;
  height: 8vw;
  margin-right: 1vw;
  overflow: hidden;
  &:hover {
    width: 15.6vw;
    height: 9.6vw;
    transition: all 0.3s linear;
  }
`;
export const SlideMovieEmptyPic = styled.div`
  width: 13vw;
  height: 8vw;
  margin-right: 1vw;
  background-color: gray;
  position: relative;
  &:hover {
    width: 15.6vw;
    height: 9.6vw;
    transition: all 0.3s linear;
  }
`;
export const SlideMovieTitle = styled.h6``;

export const BigSlideMovieImg = styled.img`
  width: 100vw;
  // height: 720px;
`;
export const BigSlideMovieTitle = styled.h2`
  position: absolute;
  top: 60%;
  left: 40%;
`;
export const BigSlideMovieDescription = styled.h3`
  position: absolute;
  top: 70%;
  left: 40%;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginInputWrapper = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
`;
export const InputItemWrapper = styled.div`
  margin-top: 5vh;
`;
export const LoginBtn = styled.button`
  border: none;
  background-color: #a72d2f;
  border-radius: 10px;
  color: white;
  width: 15vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  font-size: 1.3vw;
  cursor: pointer;
`;
export const KakaoBtn = styled.button`
  border: none;
  background-color: #fae24c;
  border-radius: 10px;
  color: black;
  width: 15vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  font-size: 1.3vw;
  cursor: pointer;
`;

export const LoginBtnWrapper = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
`;
export const SignLogo = styled.img`
  width: 15vw;
  padding: 3vw;
`;
export const SignupWrapper = styled.div`
  width: 50vw;
  // border: solid 1px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.2);
`;
export const SignTitle = styled.h2`
  font-size: 2vw;
  margin-top: 5vh;
`;

export const SignItemTitle = styled.label`
  font-size: 1.3vw;
`;
export const SignInput = styled.input`
  width: 15vw;
  height: 4vh;
  font-size: 2vh;
`;

export const SignSelect = styled.select`
  width: 15vw;
  height: 4vh;
  font-size: 2vh;
`;
export const NavLogo = styled.img`
  width: 10vw;
  text-align: center;
`;

export const SlideBtn = styled.button`
  border: 0;
  outline: 0;
  position: absolute;
  z-index: 100;
  top: 50%;
  background-color: rgba(50, 50, 50, 0);
  overflow: hidden;
  color: white;
  font-size: 2rem;
`;
export const SlideLeftBtn = styled(SlideBtn)`
  // left: 0;
  // top: 45%;
  left: 0;
  top: 23%;
  width: 50px;
  height: 100px;
`;
export const SlideRightBtn = styled(SlideBtn)`
  right: 0;
  top: 23%;
  width: 50px;
  height: 100px;
`;

// export const Test2 = styled.div`
//   position: relative;
// `;

export const MovieInfoContainer = styled.div`
  max-width: 60vw;
  margin: auto;
  position: relative;
  margin-top: 4vh;
`;
export const MovieDetailImg = styled.img`
  width: 10vw;
  margin: auto 0;
  margin-right: 2vw;
`;
export const MovieDetailImgWrapper = styled.div`
  // float: left;
  margin: auto 0;
`;
export const LikeBtnWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5vw;
`;
export const MovieDetailIndex = styled.h4``;
export const MovieDetailWrapper = styled.div`
  margin-top: 4vh;
`;
export const MovieDetailTitle = styled.h2`
  padding-right: 10vw;
  margin-bottom: 5vh;
  // border-bottom: 1px solid white;
`;
export const MovieDetailMainInfo = styled.div`
  margin-bottom: 1vh;
  font-size: 1.2rem;
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;
export const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 20rem;
    height: 80%;
    padding: 16px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;
    }
`;
