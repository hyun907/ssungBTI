"use client";

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { NameState } from "@/store/mbtiAtom";
import { useEffect, useState } from "react";
import styles from "./NameInputPage.module.css";
import Image from "next/image";
import WaterMark from "@/components/WaterMark";

const NameInputPage = () => {
  const router = useRouter();
  const [name, setName] = useRecoilState(NameState);
  const [isNameValid, setIsNameValid] = useState(false);

  useEffect(() => {
    setIsNameValid(name.trim().length > 0);
  }, [name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("NameState", newName); // ✅ 입력 즉시 localStorage에 저장
  };

  const handleStartTest = () => {
    if (!isNameValid) return;
    router.push("/test");
  };

  return (
    <>
      <div className={styles.bgImage1}>
        <Image
          src="/images/pressu-logo.png"
          alt="배경 사진"
          width={268}
          height={288.13}
          priority={true}
        />
      </div>
      <div className={styles.bgImage2}>
        <Image
          src="/images/pressu-logo.png"
          alt="배경 사진"
          width={268}
          height={288.13}
          priority={true}
        />
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.page}>
          <div className={styles.glassContainer}>
            <div className={styles.title}>
              내 이름은 슝슝이! <br /> 너는 누구야?
            </div>
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

          <div className={styles.inputWrapper}>
            <div className={styles.subTitle}>내 이름 작성 뒤 나만의 슝슝이를 만나보슝~</div>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="이름(별명)을 입력해주세요"
              className={styles.inputField}
            />
          </div>

          <div className={styles.btnWrapper}>
            <button
              className={`${styles.btn} ${!isNameValid ? styles.btnDisabled : ""}`}
              onClick={handleStartTest}
              disabled={!isNameValid}
            >
              작성했슝!
            </button>
          </div>
        </div>
        <WaterMark />
      </div>
    </>
  );
};

export default NameInputPage;
