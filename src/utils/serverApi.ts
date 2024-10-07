import { Champion, ChampionDetail, ChampionSkin, ChampionSpell } from "@/types/Champion";
import { Item, ItemDetail } from "@/types/Item";

export async function Versions(client: boolean = false): Promise<string> {
  const url = client
    ? `${process.env.NEXT_PUBLIC_RIOT_DDRAGON_URL}/api/versions.json`
    : `${process.env.NEXT_RIOT_DDRAGON_URL}/api/versions.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch version data");
  }
  const versionData = await response.json();
  return versionData[0];
}

type ChampionResponse = {
  data: Record<string, Champion>;
};

export async function Champions(
  version: string,
  client: boolean = false
): Promise<Champion[] | { error: string; status: number }> {
  try {
    const url = client
      ? `${process.env.NEXT_PUBLIC_RIOT_DDRAGON_URL}/cdn/${version}/data/ko_KR/champion.json`
      : `${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/data/ko_KR/champion.json`;

    const response = client ? await fetch(url, { next: { revalidate: 86400 } }) : await fetch(url);

    if (!response.ok) {
      return { error: "챔피언 가져오는데 오류", status: response.status };
    }

    const championData: ChampionResponse = await response.json();
    return Object.values(championData.data);
  } catch (error) {
    console.error(error);
    return { error: "서버오류!", status: 500 };
  }
}

export async function fetchChampionDetail(id: string): Promise<ChampionDetail | null> {
  const version = await Versions();
  const response = await fetch(`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const champion = data.data[id];

  return {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image: `${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`,
    description: champion.lore,
    skins: champion.skins.map((skin: ChampionSkin) => ({
      id: skin.id,
      num: skin.num,
      name: skin.name
    })),
    stats: {
      hp: champion.stats.hp,
      mp: champion.stats.mp,
      armor: champion.stats.armor,
      spellblock: champion.stats.spellblock,
      attackdamage: champion.stats.attackdamage
    },
    spells: champion.spells.map((spell: ChampionSpell) => ({
      id: spell.id,
      name: spell.name,
      description: spell.description,
      image: `${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/img/spell/${spell.id}.png`
    }))
  };
}

export async function fetchItems(): Promise<Item[]> {
  const version = await Versions();
  const response = await fetch(`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/data/ko_KR/item.json`);

  if (!response.ok) {
    throw new Error("아이템 가져오는데 에러생겼음..");
  }

  const data = await response.json();
  const items = Object.entries(data.data).map(([key, value]) => {
    const item = value as Item;

    const { id, ...rest } = item;
    return {
      id: id || key,
      ...rest
    };
  }) as Item[];

  return items;
}

export async function fetchItemDetail(): Promise<ItemDetail[]> {
  const version = await Versions();

  const response = await fetch(`${process.env.NEXT_RIOT_DDRAGON_URL}/cdn/${version}/data/ko_KR/item.json`);

  if (!response.ok) {
    throw new Error("아이템 가져오는데 에러생겼음..");
  }

  const data = await response.json();

  const itemDetail: ItemDetail[] = Object.entries(data.data).map(([key, value]) => {
    const item = value as ItemDetail;

    const { id, ...rest } = item;

    return {
      id: id || key,
      ...rest
    };
  });

  return itemDetail;
}
