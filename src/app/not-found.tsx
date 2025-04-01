"use client";

import { useRouter } from "next/navigation";
import style from "./not-found.module.css";
useRouter;

export default function NotFound() {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        죄송합니다.
      </div>
      <div className={style.title}>
        잘못된 접근입니다.
      </div>
      <div className={style.row}>
        <button className={style.btn} onClick={onClick}>
          처음으로 돌아가기
        </button>
      </div>
    </div>
  );
}
