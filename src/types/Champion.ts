export type Champion = {
  id: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  key: string;
};

export type ChampionSkin = {
  id: number;
  num: number;
  name: string;
};

export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type ChampionStats = {
  hp: number;
  mp: number;
  armor: number;
  spellblock: number;
  attackdamage: number;
};

export type ChampionDetail = {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  skins: ChampionSkin[];
  stats: ChampionStats;
  spells: ChampionSpell[];
};
