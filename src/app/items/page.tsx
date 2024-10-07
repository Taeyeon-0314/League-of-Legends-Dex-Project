import { Item } from "@/types/Item";
import { fetchItems, Versions } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "아이템 목록 - LOL DEX",
  description: "리그 오브 레전드 아이템 목록"
};

const itemPage = async () => {
  const items: Item[] = await fetchItems();
  const version = await Versions();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-teal-800">아이템 목록</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {items.length > 0 ? (
          items
            .filter((item) => item.inStore !== false)
            .filter((item) => item.consumed !== true)
            .filter((item) => item.maps["11"] === true)
            .map((item) => (
              <div className="border border-solid border-teal-800 rounded p-4 hover:shadow-lg" key={item.id}>
                <Link href={`/items/${item.id}`}>
                  <div className="flex justify-center">
                    <Image
                      src={`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/item/${item.image.full}`}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="mt-2 font-semibold text-teal-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.plaintext}</p>
                  <p className="mt-2 text-sm text-teal-800">가격 :{item.gold.total} 골드</p>
                </Link>
              </div>
            ))
        ) : (
          <p>아이템 데이터를 가져올 수 없습니다.</p>
        )}
      </div>
    </div>
  );
};
export default itemPage;
