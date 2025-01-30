import type { Metadata } from "next";
import "./globals.css";
import Recoil from "../context/RecoilContext";

export const metadata: Metadata = {
  title: "나만의 슝슝이를 찾아보슝!",
  description: "내 성격에 맞는 나만의 슝슝이를 찾아보자!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
