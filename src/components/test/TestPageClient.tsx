"use client";

import { useState } from "react";
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
  const [EI, setEI] = useRecoilState(EIState);
  const [SN, setSN] = useRecoilState(SNState);
  const [TF, setTF] = useRecoilState(TFState);
  const [JP, setJP] = useRecoilState(JPState);
  const [MBTI, setMBTI] = useRecoilState(MBTIState);
  const [userName] = useRecoilState(NameState);

  const [history, setHistory] = useState<number[]>([]);
  const progress = (count / 12) * 100;

  // MBTI 계산
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
    setHistory([...history, choice]);

    if (count <= 3) setEI(EI + (choice === 1 ? 1 : -1));
    else if (count <= 6) setSN(SN + (choice === 1 ? 1 : -1));
    else if (count <= 9) setTF(TF + (choice === 1 ? 1 : -1));
    else if (count <= 12) setJP(JP + (choice === 1 ? 1 : -1));

    if (count === 12) calculateMBTI();
    else setCount(count + 1);
  };

  const goBack = () => {
    if (count > 1) {
      const lastChoice = history.pop();
      setHistory([...history]);

      if (lastChoice !== undefined) {
        if (count <= 3) setEI(EI - (lastChoice === 1 ? 1 : -1));
        else if (count <= 6) setSN(SN - (lastChoice === 1 ? 1 : -1));
        else if (count <= 9) setTF(TF - (lastChoice === 1 ? 1 : -1));
        else if (count <= 12) setJP(JP - (lastChoice === 1 ? 1 : -1));
      }
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className={styles.bgImage1}>
        <Image src="/images/pressu-logo.png" alt="배경 사진" width={268} height={288.13} />
      </div>
      <div className={styles.container}>
        <div className={styles.mobileContainer}>
          <div className={styles.backBtnWrapper}>
            <button className={styles.backBtn} onClick={goBack} disabled={count === 1}>
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
              style={{ left: `calc(${progress}% - 28px)` }} // ✅ 프로그레스 바 진행에 맞춰 이동
            />

            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className={styles.qMark}>Q</div>
          <h3 className={styles.question}>{mbtiQuestions[count]?.ques}</h3>

          <div className={styles.choiceContainer}>
            <button className={styles.choiceButton} onClick={() => selectAnswer(1)}>
              {mbtiQuestions[count]?.ans1}
            </button>
            <button className={styles.choiceButton} onClick={() => selectAnswer(2)}>
              {mbtiQuestions[count]?.ans2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPageClient;
