import { atom } from "recoil";

// localStorage와 동기화하는 atom effect
export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window === "undefined") return;

    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      try {
        setSelf(JSON.parse(savedValue)); //  JSON 객체라면 parse
      } catch {
        setSelf(savedValue); // 단순 문자열이라면 그대로 저장
      }
    }

    onSet(({ newValue, _, isReset }: any) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        if (typeof newValue === "string") {
          localStorage.setItem(key, newValue);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      }
    });
  };

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
export const MBTIState = atom<string>({
  key: "MBTI",
  default: ""
});

export const NameState = atom({
  key: "NameState",
  default: "",
  effects: [localStorageEffect("NameState")]
});
