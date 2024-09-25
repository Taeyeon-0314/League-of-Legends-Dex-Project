import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LOL DEX",
  description: "League of Legends champion index",
  icons: {
    icon: "/images/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* body에 header와 footer 높이를 고려한 padding-top, padding-bottom 추가 */}
      <body className="pt-[64px] pb-[64px]">
        <header className="bg-teal-800 text-white py-4 fixed top-0 w-full z-10">
          <nav className="container mx-auto flex justify-around items-center text-lg font-semibold">
            <Link href={"/"}>
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/league-of-legends.png"
                alt="league-of-legends"
              />
            </Link>
            <Link href={"/"}>홈</Link>
            <Link href={"/champions"}>챔피언 목록</Link>
            <Link href={"/items"}>아이템 목록</Link>
            <Link href={"/rotation"}>챔피언 로테이션</Link>
          </nav>
        </header>
        {/* 본문 내용 */}
        <main className="container mx-auto px-4 flex-grow pt-[64px]">{children}</main>
        {/* 고정된 푸터 */}
        <footer className="bg-teal-800 text-white p-4 fixed bottom-0 w-full">
          <div className="container mx-auto text-center text-white text-sm">© 2024 LOL DEX</div>
        </footer>
      </body>
    </html>
  );
}
