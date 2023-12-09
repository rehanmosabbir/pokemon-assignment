import { ISetImage } from "@/interfaces/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const PokemonSetImageComponent: FunctionComponent<{
  image: ISetImage;
  id: string;
}> = ({ image, id }) => {
  return (
    <div>
      <Link href={`/sets/${id}`}>
        <Image src={image.logo} alt="" width={300} height={300} />
      </Link>
    </div>
  );
};

export default PokemonSetImageComponent;
