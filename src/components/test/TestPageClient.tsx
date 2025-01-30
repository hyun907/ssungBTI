"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { EIState, SNState, TFState, JPState, MBTIState, NameState } from "@/store/mbtiAtom";
import { mbtiQuestions } from "@/constants/test/mbtiQuestions";
import styles from "./ProgressBar.module.css";

const TestPageClient = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [EI, setEI] = useRecoilState(EIState);
  const [SN, setSN] = useRecoilState(SNState);
  const [TF, setTF] = useRecoilState(TFState);
  const [JP, setJP] = useRecoilState(JPState);
  const [MBTI, setMBTI] = useRecoilState(MBTIState);
  const [userName, setUserName] = useRecoilState(NameState);

  const [history, setHistory] = useState<number[]>([]);
  const [inputName, setInputName] = useState("");

  const progress = (count / 12) * 100;

  const handleStart = () => {
    if (inputName.trim()) {
      setUserName(inputName);
      localStorage.setItem("NameState", inputName);
    }
  };

  // MBTI 계산
  const calculateMBTI = () => {
    let result = "";
    result += EI > 0 ? "E" : "I";
    result += SN > 0 ? "S" : "N";
    result += TF > 0 ? "T" : "F";
    result += JP > 0 ? "J" : "P";

    setMBTI(result);
    localStorage.setItem("MBTIState", result);
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
    <div>
      {!userName ? (
        <div>
          <h2>이름을 입력하세요</h2>
          <input type="text" value={inputName} onChange={e => setInputName(e.target.value)} />
          <button onClick={handleStart}>테스트 시작</button>
        </div>
      ) : (
        <div>
          <h2>MBTI 테스트</h2>

          <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
          </div>

          <h3>
            Q{count}. {mbtiQuestions[count].ques}
          </h3>
          <button onClick={goBack} disabled={count === 1}>
            ← 뒤로가기
          </button>
          <button onClick={() => selectAnswer(1)}>{mbtiQuestions[count].ans1}</button>
          <button onClick={() => selectAnswer(2)}>{mbtiQuestions[count].ans2}</button>
        </div>
      )}
    </div>
  );
};

export default TestPageClient;
