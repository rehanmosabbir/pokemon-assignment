import { ISet } from "@/interfaces/Pokemon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import Image from "next/image";

const PokemonCartComponent: FunctionComponent<{
  pokemon: ISet;
  dec: () => void;
  removeId: (id: string) => void;
}> = ({ pokemon, dec, removeId }) => {
  const { images, ...others } = pokemon;

  return (
    <div className="flex justify-center bg-slate-200 border border-gray-500 p-10 mb-10">
      <Image src={images.logo} alt="" width={100} height={100} />
      <div className="ml-10 flex justify-center">
        <p>{pokemon.name}</p>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-red-800 fa-xl ml-2"
          onClick={() => {
            dec();
            removeId(others.id);
          }}
        />
      </div>
    </div>
  );
};

export default PokemonCartComponent;
