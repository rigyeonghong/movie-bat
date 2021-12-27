import styled from "styled-components";
export const NavContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  //   background-color: rgba(15, 15, 15, 0.2);
  background: pink;
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
export const Logo = styled.div`
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
  align-items: center
  width: 200px;
`;
// export const DropdownItem = styled.li``;
