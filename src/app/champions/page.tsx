import { Champions, Versions } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import Card from "@/components/Card";

export const metadata = {
  title: "챔피언 목록 - LOL DEX",
  description: "리그 오브 레전드 챔피언 목록"
};

const ChampionsPage = async () => {
  let champions: Champion[] = [];
  const version: string = await Versions();

  try {
    const championsData = await Champions(version);

    if ("error" in championsData) {
      console.error(championsData.error);
    } else {
      champions = championsData;
    }
  } catch (error) {
    console.error(error);
  }

  const championItems = champions.map((champion) => ({
    id: champion.id,
    name: champion.name,
    imageUrl: `${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/champion/${champion.id}.png`,
    linkUrl: `/champions/${champion.id}`,
    description: champion.title
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-teal-800">챔피언 목록</h1>
      <Card items={championItems} />
    </div>
  );
};

export default ChampionsPage;
