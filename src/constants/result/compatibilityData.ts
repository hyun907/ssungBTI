export type CompatibilityData = {
  [key: string]: {
    compatible: string;
    incompatible: string;
  };
};

export const compatibilityData: CompatibilityData = {
  ESFJ: {
    compatible: "INTP",
    incompatible: "INTJ"
  },
  ESTJ: {
    compatible: "INFP",
    incompatible: "INFJ"
  },
  ISFJ: {
    compatible: "ENTP",
    incompatible: "ENTJ"
  },
  ESTP: {
    compatible: "INFJ",
    incompatible: "INFP"
  },
  ESFP: {
    compatible: "INTJ",
    incompatible: "INTP"
  },
  ISTJ: {
    compatible: "ENFP",
    incompatible: "ENFJ"
  },
  ENFJ: {
    compatible: "ISTP",
    incompatible: "ISTJ"
  },
  ISFP: {
    compatible: "ENTJ",
    incompatible: "ENTP"
  },
  ISTP: {
    compatible: "ENFJ",
    incompatible: "ENFP"
  },
  ENTJ: {
    compatible: "ISFP",
    incompatible: "ISFJ"
  },
  INFJ: {
    compatible: "ESTP",
    incompatible: "ESTJ"
  },
  ENFP: {
    compatible: "ISTJ",
    incompatible: "ISTP"
  },
  ENTP: {
    compatible: "ISFJ",
    incompatible: "ISFP"
  },
  INTJ: {
    compatible: "ESFP",
    incompatible: "ESFJ"
  },
  INFP: {
    compatible: "ESTJ",
    incompatible: "ESTP"
  },
  INTP: {
    compatible: "ESFJ",
    incompatible: "ESFP"
  }
};
