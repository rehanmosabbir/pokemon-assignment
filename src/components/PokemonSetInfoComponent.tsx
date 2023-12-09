import { ISet } from "@/interfaces/Pokemon";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const PokemonSetInfoComponent: FunctionComponent<{
  info: Omit<ISet, "images">;
}> = ({ info }) => {
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
      {/* <Link
        href={`/sets/${info.id}`}
        className="bg-emerald-500 px-4 py-2 text-white rounded mt-4"
      >
        Show Details
      </Link> */}
    </div>
  );
};

export default PokemonSetInfoComponent;
