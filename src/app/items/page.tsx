import Card from "@/components/Card";
import { Item } from "@/types/Item";
import { fetchItems, Versions } from "@/utils/serverApi";

export const metadata = {
  title: "아이템 목록 - LOL DEX",
  description: "리그 오브 레전드 아이템 목록"
};

const itemPage = async () => {
  const items: Item[] = await fetchItems();
  const version = await Versions();

  const itemData = items
    .filter((item) => item.inStore !== false && item.consumed !== true && item.maps["11"] === true)
    .map((item) => ({
      id: item.id,
      name: item.name,
      imageUrl: `${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/item/${item.image.full}`,
      linkUrl: `/items/${item.id}`,
      description: item.plaintext,
      extraInfo: `가격 : ${item.gold.total} 골드`
    }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-teal-800">아이템 목록</h1>
      <Card items={itemData} />
    </div>
  );
};
export default itemPage;
