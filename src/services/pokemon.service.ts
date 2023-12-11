import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const _getAllSets = async () => {
  const allSets: PokemonTCG.Set[] = await PokemonTCG.getAllSets();
  return allSets;
};
export const _getAllCards = async (id: string) => {
  const allCards: PokemonTCG.Card[] = await PokemonTCG.findCardsByQueries({
    q: `set.id:${id}`,
    orderBy: "-set.releaseDate",
  });
  return allCards;
};

export const _getsingleSetData = async (id: string) => {
  return await PokemonTCG.findSetByID(id);
};

export const _editSetName = async (setid: string, setName: string) => {
  const data = await PokemonTCG.findSetByID(setid);
  console.log(data);
  console.log("Name Updated :", setName);
  return { message: "name Changed" };
};
