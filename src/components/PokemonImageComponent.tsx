import { ISetImage } from "@/interfaces/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const PokemonImageComponent: FunctionComponent<{
  image: ISetImage;
  id: string;
  name: string;
}> = ({ image, id, name }) => {
  return (
    <>
      <Link href={`/sets/${id}`}>
        <Image
          className="w-32 h-32 p-2"
          src={image.logo}
          alt={name}
          width={256}
          height={256}
        />
      </Link>
    </>
  );
};

export default PokemonImageComponent;
