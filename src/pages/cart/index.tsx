import HeaderComponent from "@/components/HeaderComponent";
import LoadingComponent from "@/components/LoadingComponent";
import PokemonCartComponent from "@/components/PokemonCartComponent";
import PokemonComponent from "@/components/PokemonComponent";
import { QueryKey, QueryKeys } from "@/enums";
import { useSets } from "@/hooks/useSets";
import { _getAllSets, _getsingleSetData } from "@/services/pokemon.service";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCountStore } from "@/hooks/useCountStore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { ISet } from "./../../interfaces/Pokemon";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: { dehydratedState: DehydratedState } }> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await _getAllSets();
      return sets;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const Cart = () => {
  const { pokemonId, dec, removeId } = useCountStore();
  console.log(pokemonId);

  const setObject = useSets();
  let fileteredObj: ISet[] | undefined = [];
  pokemonId.forEach((id) => {
    const obj = setObject.data?.filter((p) => p.id === id);
    fileteredObj?.push(...obj!);
  });

  if (!setObject) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
      >
        Loading....
      </div>
    );
  }

  return (
    <>
      <HeaderComponent />
      <div className="flex flex-wrap p-20 gap-8">
        {!setObject.isLoading ? (
          fileteredObj.map((pokemon) => (
            <div
              key={pokemon.id}
              className="flex justify-center bg-slate-200 border border-gray-500 p-10 mb-10"
            >
              <Image
                src={pokemon.images.logo}
                alt=""
                width={100}
                height={100}
              />
              <div className="ml-10 flex justify-center">
                <p>{pokemon.name}</p>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="text-red-800 fa-xl ml-2"
                  onClick={() => {
                    dec();
                    removeId(pokemon.id);
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <LoadingComponent type="spin" color="#ff0000" />
        )}
      </div>
    </>
  );
};

export default Cart;
