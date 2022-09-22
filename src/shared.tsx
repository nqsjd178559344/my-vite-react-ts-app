import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const aaaState = atom<number>({
  key: "aaaState",
  default: 0,
});
