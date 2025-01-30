"use client";

import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { EIState, JPState, SNState, TFState } from "@/store/mbtiAtom";

const StartPage = () => {
  const router = useRouter();

  const setEI = useSetRecoilState(EIState);
  const setSN = useSetRecoilState(SNState);
  const setTF = useSetRecoilState(TFState);
  const setJP = useSetRecoilState(JPState);

  return (
    <>
      <div>
        <div>logo</div>
        <div>
          <button
            onClick={() => {
              setTimeout(() => {
                router.push("/name");
                setEI(0);
                setSN(0);
                setTF(0);
                setJP(0);
              }, 0);
            }}
          >
            테스트 시작하기
          </button>
        </div>
      </div>
    </>
  );
};

export default StartPage;
