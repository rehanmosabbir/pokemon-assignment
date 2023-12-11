export interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegality;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: ISetImage;
}

export declare enum Legality {
  Legal = "Legal",
  Banned = "Banned",
}
export interface ILegality {
  expanded?: Legality;
  standard?: Legality;
  unlimited?: Legality;
}
export interface ISetImage {
  symbol: string;
  logo: string;
}
export interface ICardImage {
  small: string;
  large: string;
}

export interface ICard {
  id: string;
  name: string;
  supertype: Supertype;
  subtypes: Subtype[];
  hp?: string;
  types?: Type[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: AncientTrait;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: Rarity;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  images: ICardImage;
  tcgplayer?: TCGPlayer;
}
export declare enum Supertype {
  Energy = "Energy",
  Pokemon = "Pok\u00E9mon",
  Trainer = "Trainer",
}

export declare enum Subtype {
  Break = "BREAK",
  Baby = "Baby",
  Basic = "Basic",
  EX = "EX",
  GX = "GX",
  GoldenrodGameCorner = "Goldenrod Game Corner",
  Item = "Item",
  Legend = "LEGEND",
  LevelUp = "Level-Up",
  Mega = "MEGA",
  PokemonTool = "Pok\u00E9mon Tool",
  PokemonToolF = "Pok\u00E9mon Tool F",
  Restored = "Restored",
  RocketsSecretMachine = "Rocket's Secret Machine",
  Special = "Special",
  Stadium = "Stadium",
  StageOne = "Stage 1",
  StageTwo = "Stage 2",
  Supporter = "Supporter",
  TagTeam = "TAG TEAM",
  TechnicalMachine = "Technical Machine",
  V = "V",
  VMax = "VMAX",
  RapidStrike = "Rapid Strike",
  SingleStrike = "Single Strike",
}
export declare enum Type {
  Colorless = "Colorless",
  Darkness = "Darkness",
  Dragon = "Dragon",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Grass = "Grass",
  Lightening = "Lightning",
  Metal = "Metal",
  Psychic = "Psychic",
  Water = "Water",
}
export interface AncientTrait {
  name: string;
  text: string;
}
export interface Ability {
  name: string;
  text: string;
  type: string;
}
export interface Attack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}
interface Stats {
  type: string;
  value: string;
}
export interface Resistance extends Stats {}
export interface Weakness extends Stats {}
export {};
export declare enum Rarity {
  AmazingRare = "Amazing Rare",
  Common = "Common",
  Legend = "LEGEND",
  Promo = "Promo",
  Rare = "Rare",
  RareAce = "Rare ACE",
  RareBreak = "Rare BREAK",
  RareHolo = "Rare Holo",
  RareHoloEX = "Rare Holo EX",
  RareHoloGX = "Rare Holo GX",
  RareHoloLVX = "Rare Holo LV.X",
  RareHoloStar = "Rare Holo Star",
  RareHoloV = "Rare Holo V",
  RareHoloVMAX = "Rare Holo VMAX",
  RarePrime = "Rare Prime",
  RarePrimeStar = "Rare Prism Star",
  RareRainbow = "Rare Rainbow",
  RareSecret = "Rare Secret",
  RareShining = "Rare Shining",
  RareShiny = "Rare Shiny",
  RareShinyGX = "Rare Shiny GX",
  RareUltra = "Rare Ultra",
  Uncommon = "Uncommon",
}
export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal?: Price;
    holofoil?: Price;
    reverseHolofoil?: Price;
  };
}
export interface Price {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}
