"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { MBTIState, NameState } from "@/store/mbtiAtom";
import { compatibilityData } from "@/constants/result/compatibilityData";

const ResultPageClient = () => {
  const [MBTI, setMBTI] = useRecoilState(MBTIState);
  const [userName, setUserName] = useRecoilState(NameState);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMBTI = localStorage.getItem("MBTIState");
      if (savedMBTI) setMBTI(savedMBTI);

      const storedName = localStorage.getItem("NameState");
      if (storedName) setUserName(storedName);
    }
  }, [setMBTI, setUserName]);

  if (!MBTI) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>테스트 결과</h1>
      <h2>{userName}님의 MBTI는?</h2>
      <h3>{MBTI}</h3>
      <div>
        <div>잘 맞는 슝슝이: {compatibilityData[MBTI]?.compatible || "정보 없음"}</div>
        <div>안 맞는 슝슝이: {compatibilityData[MBTI]?.incompatible || "정보 없음"}</div>
      </div>
      <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
        결과 공유하기
      </button>
      <button onClick={() => router.push("/")}>테스트 다시하기</button>
    </div>
  );
};

export default ResultPageClient;
