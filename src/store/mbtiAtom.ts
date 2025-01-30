import { atom } from "recoil";

// localStorage와 동기화하는 atom effect
export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window === "undefined") return;

    const savedValue = localStorage.getItem(key);

    if (savedValue != null && savedValue !== "undefined") {
      // ✅ "undefined" 문자열 방지
      try {
        const parsedValue = JSON.parse(savedValue);
        setSelf(parsedValue);
      } catch {
        setSelf(savedValue); // JSON이 아니면 그냥 문자열로 저장
      }
    } else {
      setSelf("슝슝이"); // ✅ 저장된 값이 없거나 "undefined"면 기본값 설정
    }

    onSet(({ newValue, _, isReset }: any) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        try {
          localStorage.setItem(key, JSON.stringify(newValue)); // ✅ JSON 저장
        } catch {
          localStorage.setItem(key, newValue as string); // ✅ 문자열이면 그대로 저장
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
  default: "슝슝이",
  effects: [localStorageEffect("NameState")]
});
