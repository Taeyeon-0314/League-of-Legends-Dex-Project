import { ItemDetail } from "@/types/Item";
import { fetchItemDetail, Versions } from "@/utils/serverApi";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const itemDetail: ItemDetail[] = await fetchItemDetail();
  const filteredItem = itemDetail.find((item) => item.id === params.id);
  // console.log(filteredItem);

  if (!filteredItem) {
    return { title: "아이템을 찾을 수 없습니다" };
  }

  return {
    title: `${filteredItem.name} - LOL DEX`,
    description: `${filteredItem.name}의 상세 정보`
  };
}
const itemDetailPage = async ({ params }: { params: { id: string } }) => {
  const version = await Versions();
  const itemDetail: ItemDetail[] = await fetchItemDetail();

  const filteredItem = itemDetail.find((item) => item.id === params.id);

  if (!filteredItem) {
    return <div>아이템을 찾을 수 없습니다</div>;
  }

  const renderMixtureItems = (itemIds: string[], allItems: ItemDetail[]) => {
    return itemIds?.map((from: string) => {
      const mixtureItem = allItems?.find((item) => item.id === from);

      if (!mixtureItem) {
        return null;
      }

      const randomNumber = Math.floor(Math.random() * (10 - 0) + 1);
      return (
        <div className="border border-solid border-teal-800" key={from + randomNumber}>
          <div className="flex justify-center">
            <Image
              src={`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/item/${from}.png`}
              alt={mixtureItem.name}
              width={100}
              height={100}
            />
          </div>

          <h2 className="text-teal-800 text-2xl mt-4 text-center">{mixtureItem.name}</h2>
          <p className="text-teal-800 mt-5">{mixtureItem.plaintext}</p>
          <p className="text-teal-800 mt-5">가격 : {mixtureItem.gold.total} 골드</p>
          {mixtureItem.from && mixtureItem.from.length > 0 && (
            <div className="mt-4">
              <h3 className="text-teal-800 text-xl mb-2">하위 조합 아이템:</h3>
              <div className={`grid grid-cols-3 gap-2`}>{renderMixtureItems(mixtureItem.from, allItems)}</div>
            </div>
          )}
        </div>
      );
    });
  };

  const cleanDescription = (description: string) => {
    return description
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/<keywordMajor>|<\/keywordMajor>/g, "")
      .replace(/<font[^>]*>|<\/font>/g, "");
  };

  // const gridColsClass = `grid-cols-${Math.min(filteredItem.from?.length || 1, 4)}`;

  return (
    <div>
      <h1 className="text-teal-800 text-5xl mb-4">{filteredItem.name}</h1>
      <h2 className="text-gray-600 text-2xl mb-4">{filteredItem.plaintext}</h2>
      <div className="flex justify-center">
        <Image
          src={`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/item/${params.id}.png`}
          alt={params.id}
          width={300}
          height={300}
        />
      </div>
      <p className="text-teal-800 mt-4 text-lg">{cleanDescription(filteredItem.description)}</p>

      {Object.entries(filteredItem.stats).map(([key, value]) => (
        <li key={key} className="text-teal-800">
          {key === "FlatMagicDamageMod"
            ? "주문력"
            : key === "FlatSpellBlockMod"
            ? "마법 저항력"
            : key === "FlatPhysicalDamageMod"
            ? "공격력"
            : key === "FlatHPPoolMod"
            ? "체력"
            : key === "FlatMPPoolMod"
            ? "마나"
            : key === "FlatArmorMod"
            ? "방어력"
            : key === "FlatCritChanceMod"
            ? "치명타 확률"
            : key === "FlatMovementSpeedMod"
            ? "이동 속도"
            : key === "PercentAttackSpeedMod"
            ? "공격 속도"
            : key === "PercentLifeStealMod"
            ? "생명력 흡수"
            : key === "PercentMovementSpeedMod"
            ? "이동 속도"
            : key}
          : {value}
        </li>
      ))}

      <h1 className="text-teal-800 text-4xl mt-6 mb-3">조합 아이템</h1>
      <div className={`grid grid-cols-3 gap-2`}>{renderMixtureItems(filteredItem.from, itemDetail)}</div>
    </div>
  );
};

export default itemDetailPage;
