import { ISet } from "@/interfaces/Pokemon";
import React, { FunctionComponent } from "react";
import PokemonSetImageComponent from "./PokemonSetImageComponent";
import PokemonSetInfoComponent from "./PokemonSetInfoComponent";

const PokemonSetComponent: FunctionComponent<{
  pokemon: ISet;
}> = ({ pokemon }) => {
  const { images, ...others } = pokemon;
  return (
    <div className="bg-slate-200 border border-gray-500 p-10 mt-20">
      <PokemonSetImageComponent id={others.id} image={images} />
      <PokemonSetInfoComponent info={others} />
    </div>
  );
};

export default PokemonSetComponent;
