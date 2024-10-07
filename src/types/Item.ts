export type Item = {
  id: string;
  name: string;
  plaintext: string;
  image: {
    full: string;
  };
  gold: {
    total: number;
  };
  inStore?: boolean;
  consumed?: boolean;
  maps: {
    11: boolean;
  };
};

export type ItemDetail = {
  id: string;
  name: string;
  plaintext: string;
  description: string;
  image: {
    full: string;
  };
  gold: {
    total: number;
  };
  from: string[];
  stats: Record<string, number>;
};
