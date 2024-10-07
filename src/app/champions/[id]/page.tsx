import Image from "next/image";
import { fetchChampionDetail } from "@/utils/serverApi";
import { ChampionSkin, ChampionSpell } from "@/types/Champion";
import Card from "@/components/Card";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const champion = await fetchChampionDetail(params.id);

  if (!champion) {
    return { title: "챔피언을 찾을 수 없습니다" };
  }

  return {
    title: `${champion.name} - LOL DEX`,
    description: `${champion.name}의 상세 정보`
  };
}

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const champion = await fetchChampionDetail(params.id);

  if (!champion) {
    return <div>챔피언을 찾을 수 없습니다!!!</div>;
  }

  const cleanDescription = (description: string) => {
    return description
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/<keywordMajor>|<\/keywordMajor>/g, "")
      .replace(/<font[^>]*>|<\/font>/g, "");
  };

  const statsInfo = [
    { label: "기본 체력", value: champion.stats.hp },
    { label: "기본 마나/기력", value: champion.stats.mp },
    { label: "기본 공격력/주문력", value: champion.stats.attackdamage },
    { label: "기본 방어력", value: champion.stats.armor },
    { label: "기본 주문력", value: champion.stats.spellblock }
  ];

  const skinItems = champion.skins.map((skin: ChampionSkin) => ({
    id: skin.id.toString(),
    name: skin.name === "default" ? "기본 스킨" : skin.name,
    imageUrl: `${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`,
    linkUrl: `/champion/${champion.id}`
  }));

  return (
    <div>
      <h1 className="text-teal-800 text-5xl mb-4">{champion.name}</h1>
      <h2 className="text-gray-600 text-2xl mb-4">{champion.title}</h2>
      <div className="flex justify-center">
        <Image src={champion.image} alt={champion.name} width={600} height={600} />
      </div>
      <p className="text-teal-800 mt-4 text-lg">{champion.description}</p>
      <div className="mt-6">
        <h1 className="text-teal-800 text-4xl mb-3">스탯</h1>
        {statsInfo.map(({ label, value }) => (
          <li key={label} className="text-teal-800">
            {label}: {value}
          </li>
        ))}
      </div>
      <h1 className="text-teal-800 text-4xl mt-6 mb-3 ">스킬</h1>
      <div className="grid grid-cols-4 gap-2">
        {champion.spells.map((spell: ChampionSpell) => (
          <div className="border border-solid border-teal-800" key={spell.id}>
            <div className="flex justify-center">
              <Image src={spell.image} alt={spell.name} width={100} height={100} />
            </div>
            <h2 className="text-teal-800 text-2xl mt-4 text-center">{spell.name}</h2>
            <p className="text-teal-800 mt-5">{cleanDescription(spell.description)}</p>
          </div>
        ))}
      </div>
      <h1 className="text-teal-800 text-4xl mt-6 mb-3 ">스킨</h1>
      <Card items={skinItems} />
    </div>
  );
};

export default ChampionDetailPage;
