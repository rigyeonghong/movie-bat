import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: [null, null],
  effects_UNSTABLE: [persistAtom],
});

// nickname, email, phoneNum, password
export const signinState = atom({
  key: "signinState",
  default: [null, null, null, null],
  effects_UNSTABLE: [persistAtom],
});
