import { ISet } from "@/interfaces/Pokemon";
import { _getAllSets } from "@/services/pokemon.service";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, FunctionComponent, useState } from "react";
import CustomModalComponent from "./CustomModalComponent";

const PokemonSetInfoComponent: FunctionComponent<{
  info: Omit<ISet, "images">;
  updateName: any;
}> = ({ info, updateName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ename, setEname] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleenameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEname(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEname("");
  };
  console.log(info.name);
  return (
    <div>
      <div className="mt-4">
        <h1 className="mt-4">
          <span className="font-bold">Name :</span>
          <span>{info.name}</span>
          <FontAwesomeIcon
            onClick={openModal}
            icon={faEdit}
            className="text-red-800 fa-xl ml-2"
          />
        </h1>
        <p>
          <span className="font-bold">Release Date : </span>
          {info.releaseDate}
        </p>
        <p>
          <span className="font-bold">Legalities: </span>
          {info.legalities?.expanded}
        </p>
        <p>
          <span className="font-bold">Series : </span>
          {info.series}
        </p>
        <p className="mb-4">
          <span className="font-bold">Total : </span>
          {info.total}
        </p>
        <div className="flex justify-center items-center">
          <CustomModalComponent
            info={info}
            isOpen={isModalOpen}
            onClose={closeModal}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="ename"
                id="ename"
                value={ename}
                onChange={handleenameChange}
                required
              />
              <div className="mt-2">
                <input
                  type="submit"
                  onClick={() =>
                    updateName({ setid: info.id!, setName: ename })
                  }
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </form>
          </CustomModalComponent>
        </div>
      </div>
    </div>
  );
};

export default PokemonSetInfoComponent;
