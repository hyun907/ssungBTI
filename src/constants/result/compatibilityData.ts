export type CompatibilityData = {
  [key: string]: {
    compatible: string;
    incompatible: string;
  };
};

export const compatibilityData: CompatibilityData = {
  ESFJ: {
    compatible: "분석하슝",
    incompatible: "쌀쌀맞슝"
  },
  ESTJ: {
    compatible: "공감하슝",
    incompatible: "꾸준하슝"
  },
  ISFJ: {
    compatible: "자신있슝",
    incompatible: "리드하슝"
  },
  ESTP: {
    compatible: "꾸준하슝",
    incompatible: "공감하슝"
  },
  ESFP: {
    compatible: "쌀쌀맞슝",
    incompatible: "분석하슝"
  },
  ISTJ: {
    compatible: "열정있슝",
    incompatible: "정의롭슝"
  },
  ENFJ: {
    compatible: "차분하슝",
    incompatible: "깐깐하슝"
  },
  ISFP: {
    compatible: "리드하슝",
    incompatible: "자신있슝"
  },
  ISTP: {
    compatible: "정의롭슝",
    incompatible: "열정있슝"
  },
  ENTJ: {
    compatible: "세심하슝",
    incompatible: "꼼꼼하슝"
  },
  INFJ: {
    compatible: "호탕하슝",
    incompatible: "엄격하슝"
  },
  ENFP: {
    compatible: "깐깐하슝",
    incompatible: "차분하슝"
  },
  ENTP: {
    compatible: "꼼꼼하슝",
    incompatible: "세심하슝"
  },
  INTJ: {
    compatible: "자유롭슝",
    incompatible: "센스있슝"
  },
  INFP: {
    compatible: "엄격하슝",
    incompatible: "호탕하슝"
  },
  INTP: {
    compatible: "센스있슝",
    incompatible: "자유롭슝"
  }
};
