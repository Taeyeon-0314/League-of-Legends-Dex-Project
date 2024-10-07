import { Champions, Versions } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/types/Champion";

export const metadata = {
  title: "챔피언 목록 - LOL DEX",
  description: "리그 오브 레전드 챔피언 목록"
};

const ChampionsPage = async () => {
  let champions: Champion[] = [];
  let version: string = "";

  try {
    version = await Versions();
    const championsData = await Champions(version);

    if ("error" in championsData) {
      console.error(championsData.error);
    } else {
      champions = championsData;
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-teal-800">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {champions.length > 0 ? (
          champions.map((champion) => (
            <div className="border border-solid border-teal-800 rounded p-4 hover:shadow-lg" key={champion.id}>
              <Link href={`/champions/${champion.id}`}>
                <div className="flex justify-center">
                  <Image
                    src={`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/champion/${champion.id}.png`}
                    alt={champion.name}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="mt-2 font-semibold text-teal-800">{champion.name}</p>
                <p className="text-sm text-gray-500">{champion.title}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>챔피언 데이터를 가져올 수 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ChampionsPage;
