import React from "react";
import { Dropdown, DropdownItemList, MenuItem } from "../../styles/theme";
function UserMenu() {
  return (
    <Dropdown>
      <DropdownItemList>
        <MenuItem>
          <button>찜 목록</button>
        </MenuItem>
        <hr />
        <MenuItem>
          <button>로그아웃</button>
        </MenuItem>
      </DropdownItemList>
    </Dropdown>
  );
}
export default UserMenu;
