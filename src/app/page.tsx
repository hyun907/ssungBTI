"use client";

import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { EIState, JPState, SNState, TFState, NameState } from "@/store/mbtiAtom";
import styles from "./page.module.css";
import Image from "next/image";
import WaterMark from "@/components/WaterMark";

const StartPage = () => {
  const router = useRouter();

  const setEI = useSetRecoilState(EIState);
  const setSN = useSetRecoilState(SNState);
  const setTF = useSetRecoilState(TFState);
  const setJP = useSetRecoilState(JPState);
  const setName = useSetRecoilState(NameState);

  return (
    <>
      <div className={styles.bgImage1}>
        <Image src="/images/start1.png" alt="배경 사진" width={220} height={220} priority={true} />
      </div>
      <div className={styles.bgImage2}>
        <Image src="/images/start2.png" alt="배경 사진" width={220} height={220} priority={true} />
      </div>
      <div className={styles.bgImage3}>
        <Image src="/images/start3.png" alt="배경 사진" width={220} height={220} priority={true} />
      </div>
      <div className={styles.bgImage4}>
        <Image src="/images/start4.png" alt="배경 사진" width={220} height={220} priority={true} />
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.page}>
          <div className={styles.glassContainer}>
            <div className={styles.title}>
              나만의 <span className={styles.titleBold}>슝슝이</span>를
              <br />
              찾아보슝!
            </div>
            <div className={styles.subTitle}>내 성격에 맞는 나만의 슝슝이를 찾아보자!</div>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/syungsyung-img.png"
                alt="슝슝이 사진"
                width={358}
                height={420}
                priority={true}
                quality={100}
              />
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <button
              className={styles.btn}
              onClick={() => {
                setTimeout(() => {
                  router.push("/name");
                  setEI(0);
                  setSN(0);
                  setTF(0);
                  setJP(0);
                  setName("");
                }, 0);
              }}
            >
              테스트 시작하기
            </button>
          </div>
        </div>
        <WaterMark />
      </div>
    </>
  );
};

export default StartPage;
