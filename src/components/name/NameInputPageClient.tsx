"use client";

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { NameState } from "@/store/mbtiAtom";

const NameInputPage = () => {
  const router = useRouter();
  const [name, setName] = useRecoilState(NameState); // Recoil 상태 (localStorage 자동 저장)

  const handleStartTest = () => {
    if (name.trim() === "") {
      alert("이름을 입력해주세요!");
      return;
    }
    router.push("/test"); // 테스트 페이지로 이동
  };

  return (
    <div>
      <h1>MBTI 테스트</h1>
      <p>이름을 입력해주세요</p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <button onClick={handleStartTest}>테스트 시작</button>
    </div>
  );
};

export default NameInputPage;
