import { ISet } from "@/interfaces/Pokemon";
import React, { FunctionComponent } from "react";
import PokemonImageComponent from "./PokemonImageComponent";
import PokemonInfoComponent from "./PokemonInfoComponent";

const PokemonComponent: FunctionComponent<{
  pokemon: ISet;
}> = ({ pokemon }) => {
  const { images, ...others } = pokemon;
  return (
    <div className="bg-slate-200 border border-gray-500 p-10 mb-10">
      <PokemonImageComponent image={images} />
      <PokemonInfoComponent  info={others} />
    </div>
  );
};

export default PokemonComponent;
