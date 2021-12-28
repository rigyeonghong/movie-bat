import styled from "styled-components";
export const NavContainer = styled.div`
  position: fixed;
  // top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //   background-color: rgba(15, 15, 15, 0.2);
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
`;
export const Profile = styled.img`
  width: 64px;
  height: 64px;
`;
export const Dropdown = styled.div`
  position: absolute;
`;
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
  width: 10.5vw;
  hegith: 15vw;
  margin-right: 1vw;
`;
export const SlideMovieTitle = styled.h6``;

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
export const LoginBtnWrapper = styled.button`
  all: unset;
  margin: 10px;
  background-color: cyan;
  border-radius: 10px;
  padding: 5px 15px 5px 10px;
`;
export const SignLogo = styled.img`
  width: 15vw;
  padding: 3vw;
`;
export const Test = styled.div`
  padding: 5vw;
  border: solid 1px white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
