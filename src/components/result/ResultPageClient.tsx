"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { MBTIState, NameState } from "@/store/mbtiAtom";
import { compatibilityData } from "@/constants/result/compatibilityData";
import Image from "next/image";
import Link_IC from "@/../public/svg/link.svg";
import { Toaster, toast } from "react-hot-toast";
import styles from "./ResultPageClient.module.css";

const mbtiBackgroundColors: { [key: string]: string } = {
  ENFP: "#FF318B",
  ENFJ: "#FF786B",
  ENTP: "#FFAC00",
  ENTJ: "#6A286E",
  ESFP: "#00918E",
  ESFJ: "#966828",
  ESTP: "#D32C00",
  ESTJ: "#262F7B",
  INFP: "#1B4396",
  INFJ: "#3BB9DF",
  INTP: "#89E7C9",
  INTJ: "#000000",
  ISFP: "#FFE972",
  ISFJ: "#E3B6FF",
  ISTP: "#5BC267",
  ISTJ: "#4000F7"
};

const ResultPageClient = () => {
  const [MBTI, setMBTI] = useRecoilState(MBTIState);
  const [userName, setUserName] = useRecoilState(NameState);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMBTI = localStorage.getItem("MBTIState");
      if (savedMBTI) {
        setMBTI(savedMBTI);
      }

      const storedName = localStorage.getItem("NameState");
      if (storedName) {
        setUserName(storedName);
      }
    }

    if (MBTI) {
      setIsLoading(false);
    }
  }, [MBTI, setMBTI, setUserName]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>로딩 중...</p>
      </div>
    );
  }

  const backgroundColor = mbtiBackgroundColors[MBTI] || "#FFFFFF";
  const mbtiImagePath = `/images/mbti/${MBTI}.png`;
  const compatibleImagePath = `/images/mbtiAssets/${compatibilityData[MBTI]?.compatible || ""}.png`;
  const incompatibleImagePath = `/images/mbtiAssets/${compatibilityData[MBTI]?.incompatible || ""}.png`;

  const handleCopyLink = () => {
    const baseUrl = window.location.origin;
    navigator.clipboard.writeText(baseUrl);
    toast.success("링크 복사가 되었습니다!", {
      style: {
        borderRadius: "12px",
        background: "#ffffff",
        color: "#000",
        padding: "12px 20px",
        fontSize: "1.6rem",
        fontWeight: "bold",
        fontFamily: "NanumSquareAcB",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
      }
    });
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor, transition: "background 0.5s ease-in-out" }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className={styles.resultTitle}>{userName}의 슝슝이는...</h2>
      <Image
        src={mbtiImagePath}
        width={393}
        height={821}
        alt={`${MBTI} 이미지`}
        quality={100}
        className={styles.mbtiImage}
      />
      <div className={styles.caption}>▲ 이미지 꾹 눌러서 저장하기</div>
      <div className={styles.compatibilityContainer}>
        <div className={styles.compatibilityBox}>
          <div>잘 맞는 슝슝이</div>
          <Image
            src={compatibleImagePath}
            alt="잘 맞는 슝슝이"
            width={119}
            height={185}
            quality={100}
          />
          <div>{compatibilityData[MBTI]?.compatible || ""}</div>
        </div>
        <div className={styles.compatibilityBox}>
          <div>안 맞는 슝슝이</div>
          <Image
            src={incompatibleImagePath}
            alt="안 맞는 슝슝이"
            width={119}
            height={185}
            quality={100}
          />
          <div>{compatibilityData[MBTI]?.incompatible || ""}</div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.caption}>친구에게 공유하기</div>
        <div className={styles.sharedBtn} onClick={handleCopyLink}>
          <Link_IC />
        </div>
        <button className={styles.reButton} onClick={() => router.push("/")}>
          테스트 다시하기
        </button>
      </div>
    </div>
  );
};

export default ResultPageClient;
