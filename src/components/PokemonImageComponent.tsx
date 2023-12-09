import { ISetImage } from "@/interfaces/Pokemon";
import Image from "next/image";
import React, { FunctionComponent } from "react";

const PokemonImageComponent: FunctionComponent<{ image: ISetImage }> = ({
  image,
}) => {
  return (
    <div>
      <Image src={image.logo} alt="" width={300} height={300} />
    </div>
  );
};

export default PokemonImageComponent;
