import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import Recoil from "../context/RecoilContext";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

export const metadata: Metadata = {
  title: "나만의 슝슝이를 찾아보슝!",
  description: "내 성격에 맞는 나만의 슝슝이를 찾아보자!",
  openGraph: {
    type: "website",
    url: "https://ssung-bti.vercel.app",
    title: "나만의 슝슝이를 찾아보슝!",
    description: "내 성격에 맞는 나만의 슝슝이를 찾아보자!",
    siteName: "슝BTI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "슝BTI - 나만의 슝슝이 찾기"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "나만의 슝슝이를 찾아보슝!",
    description: "내 성격에 맞는 나만의 슝슝이를 찾아보자!",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="나만의 슝슝이를 찾아보슝!" />
        <meta property="og:description" content="내 성격에 맞는 나만의 슝슝이를 찾아보자!" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://ssung-bti.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
