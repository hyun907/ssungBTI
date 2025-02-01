"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { EIState, SNState, TFState, JPState, MBTIState, NameState } from "@/store/mbtiAtom";
import { mbtiQuestions } from "@/constants/test/mbtiQuestions";
import styles from "./TestPageClient.module.css";
import Back_IC from "@/../public/svg/backArrow.svg";
import Image from "next/image";

const TestPageClient = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [EI, setEI] = useRecoilState(EIState);
  const [SN, setSN] = useRecoilState(SNState);
  const [TF, setTF] = useRecoilState(TFState);
  const [JP, setJP] = useRecoilState(JPState);
  const [MBTI, setMBTI] = useRecoilState(MBTIState);
  const [userName] = useRecoilState(NameState);

  const [history, setHistory] = useState<number[]>([]);
  const progress = (count / 12) * 100;

  useEffect(() => {
    setFadeOut(false);
  }, [count]);

  const calculateMBTI = () => {
    let result = "";
    result += EI > 0 ? "E" : "I";
    result += SN > 0 ? "S" : "N";
    result += TF > 0 ? "T" : "F";
    result += JP > 0 ? "J" : "P";

    setMBTI(result);
    router.push("/result");
  };

  const selectAnswer = (choice: number) => {
    setFadeOut(true);
    setTimeout(() => {
      setHistory(prev => [...prev, choice]);

      if (count <= 3) setEI(prev => prev + (choice === 1 ? 1 : -1));
      else if (count <= 6) setSN(prev => prev + (choice === 1 ? 1 : -1));
      else if (count <= 9) setTF(prev => prev + (choice === 1 ? 1 : -1));
      else if (count <= 12) setJP(prev => prev + (choice === 1 ? 1 : -1));

      if (count === 12) {
        setIsLoading(true);
        setTimeout(() => {
          calculateMBTI();
        }, 2000);
      } else {
        setCount(prev => prev + 1);
        setFadeOut(false);
      }
    }, 200);
  };

  return (
    <>
      <div className={styles.bgImage1}>
        <Image src="/images/pressu-logo.png" alt="배경 사진" width={268} height={288.13} priority />
      </div>
      <div className={styles.container}>
        <div className={styles.mobileContainer}>
          {isLoading ? (
            <div className={styles.loadingScreen}>
              <div className={styles.loadingImg}>
                <Image src="/images/loading1.png" alt="로딩 중" width={117} height={94} priority />
                <Image src="/images/loading2.png" alt="로딩 중" width={117} height={94} priority />
                <Image src="/images/loading3.png" alt="로딩 중" width={117} height={94} priority />
              </div>
              <div className={styles.loadingText}>당신의 슝슝이를 찾고있슝...</div>
            </div>
          ) : (
            <>
              <div className={styles.backBtnWrapper}>
                <button
                  className={styles.backBtn}
                  onClick={() => setCount(prev => prev - 1)}
                  disabled={count === 1}
                >
                  <Back_IC /> 이전 질문
                </button>
              </div>

              <div className={styles.progressWrapper}>
                <Image
                  className={styles.progressIcon}
                  src={"/images/running-syung.png"}
                  width={50}
                  height={61}
                  alt={"슝슝이 프로그레스바"}
                  style={{ left: `calc(${progress}% - 28px)` }}
                />
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div className={styles.qMark}>Q</div>
              <h3 className={styles.question}>{mbtiQuestions[count]?.ques}</h3>

              <div className={`${styles.choiceContainer} ${fadeOut ? styles.fadeOut : ""}`}>
                <button key={count} className={styles.choiceButton} onClick={() => selectAnswer(1)}>
                  {mbtiQuestions[count]?.ans1}
                </button>
                <button
                  key={count + "b"}
                  className={styles.choiceButton}
                  onClick={() => selectAnswer(2)}
                >
                  {mbtiQuestions[count]?.ans2}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TestPageClient;
