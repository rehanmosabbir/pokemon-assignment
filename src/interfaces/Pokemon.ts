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
