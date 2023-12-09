import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const _getAllSets = async () => {
  const allSets: PokemonTCG.Set[] = await PokemonTCG.getAllSets();
  return allSets;
};

export const _getsingleSetData = async (id: string) => {
  return await PokemonTCG.findSetByID(id);
};

export const _editSetName = async (setid: string, setName: string) => {
  return { message: "name Changed" };
};
