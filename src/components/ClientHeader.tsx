// src/app/ClientHeader.tsx (클라이언트 컴포넌트)
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ClientHeader() {
  const pathname = usePathname();

  return (
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
        <Link href={"/"} className={pathname === "/" ? "text-black" : ""}>
          홈
        </Link>
        <Link href={"/champions"} className={pathname === "/champions" ? "text-black" : ""}>
          챔피언 목록
        </Link>
        <Link href={"/items"} className={pathname === "/items" ? "text-black" : ""}>
          아이템 목록
        </Link>
        <Link href={"/rotation"} className={pathname === "/rotation" ? "text-black" : ""}>
          챔피언 로테이션
        </Link>
      </nav>
    </header>
  );
}
