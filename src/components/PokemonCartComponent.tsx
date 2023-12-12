import { ISet } from "@/interfaces/Pokemon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonCartComponent: FunctionComponent<{
  pokemon: ISet;
  dec: () => void;
  removeId: (id: string) => void;
}> = ({ pokemon, dec, removeId }) => {
  const { images, ...others } = pokemon;

  return (
    <div className=" py-6 flex justify-around  m-4 border w-2/4 mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md h-[100px]">
      <div className="flex">
        <Image src={images.logo} alt="" width={200} height={200} />
        <p className="py-4 ml-4 text-purple-800">{pokemon.name}</p>
      </div>
      <div className="mr-10 mt-4">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="fa-xl text-red-800"
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
