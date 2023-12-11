import { ISet } from "@/interfaces/Pokemon";
import React, { FunctionComponent } from "react";
import PokemonImageComponent from "./PokemonImageComponent";
import PokemonInfoComponent from "./PokemonInfoComponent";

const PokemonComponent: FunctionComponent<{
  pokemon: ISet;
  updateName: any;
}> = ({ pokemon, updateName }) => {
  const { images, id, name } = pokemon;
  console.log(id);
  return (
    <div
      className="m-4 border text-card-foreground w-full max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden"
      data-v0-t="card"
    >
      <PokemonImageComponent image={images} id={id} name={name} />
      <PokemonInfoComponent updateName={updateName} info={pokemon} />
    </div>
  );
};

export default PokemonComponent;
