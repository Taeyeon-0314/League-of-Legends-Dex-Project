"use client";

import { useEffect, useState } from "react";
import { ChampionRotation } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import { Champion } from "@/types/Champion";
import { Champions, Versions } from "@/utils/serverApi";
import Link from "next/link";

const RotationChampionPage = () => {
  const [championRotation, setChampionRotation] = useState<ChampionRotation | null>(null);
  const [champions, setChampions] = useState<Champion[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);
  useEffect(() => {
    const fetchRotation = async () => {
      try {
        const client = true;
        const data: ChampionRotation = await getChampionRotation();
        const version = await Versions(client);
        setVersion(version);
        const championsData = await Champions(version, client);

        if ("error" in championsData) {
          setError(championsData.error);
        } else {
          setChampions(championsData);
          setChampionRotation(data);
        }
        setLoading(false);
      } catch (error) {
        setError("챔피언 로테이션 데이터를 가져오는데 오류발생: " + error);
        setLoading(false);
      }
    };

    fetchRotation();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!champions || !championRotation) return <div>챔피언 데이터를 가져올 수 없습니다.</div>;

  const rotatedChampions = championRotation.freeChampionIds
    .map((id) => champions.find((champion) => champion.key === id.toString()))
    .filter(Boolean);

  const newRotatedChampions = championRotation.freeChampionIdsForNewPlayers
    .map((id) => champions.find((champion) => champion.key === id.toString()))
    .filter(Boolean);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-teal-800">챔피언 로테이션</h1>
      <div className="grid grid-cols-4 gap-4">
        {rotatedChampions.length > 0 ? (
          rotatedChampions.map(
            (champion) =>
              champion && (
                <div className="border border-solid border-teal-800 rounded p-4 hover:shadow-lg" key={champion.id}>
                  <Link href={`/champions/${champion.id}`}>
                    <div className="flex justify-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_RIOT_DDRAGON_URL}/cdn/${version}/img/champion/${champion.image.full}`}
                        alt={champion.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="mt-2 font-semibold text-teal-800">{champion.name}</p>
                    <p className="text-sm text-gray-500">{champion.title}</p>
                  </Link>
                </div>
              )
          )
        ) : (
          <p>무료 플레이 챔피언 데이터를 가져올 수 없습니다.</p>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-4 text-teal-800">신규 소환사 챔피언 로테이션</h1>
      <div className="grid grid-cols-4 gap-4">
        {newRotatedChampions.length > 0 ? (
          newRotatedChampions.map(
            (champion) =>
              champion && (
                <div className="border border-solid border-teal-800 rounded p-4 hover:shadow-lg" key={champion.id}>
                  <Link href={`/champions/${champion.id}`}>
                    <div className="flex justify-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_RIOT_DDRAGON_URL}/cdn/${version}/img/champion/${champion.image.full}`}
                        alt={champion.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="mt-2 font-semibold text-teal-800">{champion.name}</p>
                    <p className="text-sm text-gray-500">{champion.title}</p>
                  </Link>
                </div>
              )
          )
        ) : (
          <p>신규 소환사 무료 플레이 챔피언 데이터를 가져올 수 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default RotationChampionPage;
