import { useCountStore } from "@/hooks/useCountStore";
import { ISet } from "@/interfaces/Pokemon";
import React, { FunctionComponent, useState } from "react";
import CustomModalComponent from "./CustomModalComponent";

const PokemonInfoComponent: FunctionComponent<{
  info: Omit<ISet, "images">;
}> = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { inc, pushId } = useCountStore();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mt-4">
      <h1 className="mt-4">
        <span className="font-bold">Name :</span>
        <span>{info.name}</span>
      </h1>
      <p>
        <span className="font-bold">Release Date : </span>
        {info.releaseDate}
      </p>
      <p>
        <span className="font-bold">Legalities: </span>
        {info.legalities.expanded}
      </p>
      <p>
        <span className="font-bold">Series : </span>
        {info.series}
      </p>
      <p className="mb-4">
        <span className="font-bold">Total : </span>
        {info.total}
      </p>

      <button
        onClick={openModal}
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Quick View
      </button>
      <div className="flex justify-center items-center">
        <CustomModalComponent
          info={info}
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div>
            <h1 className="mt-4">
              <span className="font-bold text-white">Name :</span>
              <span className="text-white">{info.name}</span>
            </h1>
            <p>
              <span className="font-bold text-white">Release Date : </span>
              <span className="text-white">{info.releaseDate}</span>
            </p>
            <p>
              <span className="font-bold text-white">Legalities: </span>
              <span className="text-white">{info.legalities.expanded}</span>
            </p>
            <p>
              <span className="font-bold text-white">Series : </span>
              <span className="text-white">{info.series}</span>
            </p>
            <p className="mb-4">
              <span className="font-bold text-white">Total : </span>
              <span className="text-white">{info.total}</span>
            </p>
            <button
              onClick={() => {
                inc();
                pushId(info.id);
              }}
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to cart
            </button>
          </div>
        </CustomModalComponent>
      </div>
    </div>
  );
};

export default PokemonInfoComponent;
