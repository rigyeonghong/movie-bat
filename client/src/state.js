import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: {
    userIdx: null,
    userNickname: null,
    userGenre: null,
    userRunningtime: null,
    userRegion: null,
  },
  effects_UNSTABLE: [persistAtom],
});

// nickname, email, phoneNum, password
export const signinState = atom({
  key: "signinState",
  default: [null, null, null, null],
  effects_UNSTABLE: [persistAtom],
});
