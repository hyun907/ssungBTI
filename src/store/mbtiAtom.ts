import { atom } from "recoil";

// ✅ localStorage에서 초기값 불러오기 함수
const getStoredValue = (key: string, defaultValue: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) ?? defaultValue;
  }
  return defaultValue;
};

export const NameState = atom<string>({
  key: "NameState",
  default: getStoredValue("NameState", "슝슝이"), // ✅ 초기값을 localStorage에서 가져오기
  effects: [
    ({ setSelf, onSet }) => {
      if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem("NameState");
        if (storedValue) setSelf(storedValue);
      }

      onSet(newValue => {
        if (typeof window !== "undefined") {
          localStorage.setItem("NameState", newValue as string);
        }
      });
    }
  ]
});

export const MBTIState = atom<string>({
  key: "MBTIState",
  default: getStoredValue("MBTIState", ""),
  effects: [
    ({ setSelf, onSet }) => {
      if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem("MBTIState");
        if (storedValue) setSelf(storedValue);
      }

      onSet(newValue => {
        if (typeof window !== "undefined") {
          localStorage.setItem("MBTIState", newValue as string);
        }
      });
    }
  ]
});
export const EIState = atom<number>({
  key: "EI",
  default: 0
});
export const SNState = atom<number>({
  key: "SN",
  default: 0
});
export const TFState = atom<number>({
  key: "TF",
  default: 0
});
export const JPState = atom<number>({
  key: "JP",
  default: 0
});
export const datasState = atom<string>({
  key: "datas",
  default: ""
});
