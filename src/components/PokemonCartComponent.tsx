import { ISet } from "@/interfaces/Pokemon";
import React, { FunctionComponent } from "react";

const PokemonCartComponent: FunctionComponent<{
  pokemon: ISet;
  dec: () => void;
  removeId: (id: string) => void;
}> = ({ pokemon, dec, removeId }) => {
  const { images, ...others } = pokemon;

  return <></>;
};

export default PokemonCartComponent;
