import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
        <div className="flex flex-col justify-center gap-10 mt-5">
          <Link className="flex flex-col justify-center items-center gap-5 text-amber-400" href="/champions">
            <div className="relative w-[400px] h-[240px]">
              <Image src="/images/aphelios.jpg" alt="Aphelios" width={400} height={400} />
            </div>
            <div className="flex flex-row items-center gap-2 bg-white px-2  text-black rounded-2xl font-medium w-48">
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/league-of-legends.png"
                alt="league-of-legends"
              />
              챔피언 목록 보기
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-10 mt-5">
          <Link className="flex flex-col justify-center items-center gap-5 text-amber-400" href="/champions">
            <div className="relative w-[400px] h-[240px]">
              <Image src="/images/yuumi.jpg" alt="yuumi" width={400} height={400} />
            </div>
            <div className="flex flex-row items-center gap-2 bg-white px-2  text-black rounded-2xl font-medium	w-48">
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/league-of-legends.png"
                alt="league-of-legends"
              />
              금주 로테이션 확인
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-10 mt-5 font-medium	">
          <Link className="flex flex-col justify-center items-center gap-5 text-amber-400" href="/champions">
            <div className="relative w-[400px] h-[240px]">
              <Image src="/images/teemo.png" alt="teemo" width={400} height={400} />
            </div>
            <div className="flex flex-row items-center gap-2 bg-white px-2  text-black rounded-2xl w-48">
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/league-of-legends.png"
                alt="league-of-legends"
              />
              아이템 목록 보기
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
