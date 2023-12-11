import HeaderComponent from "@/components/HeaderComponent";
import LoadingComponent from "@/components/LoadingComponent";
import { CardQueryKey, QueryKey } from "@/enums";
import { useCards } from "@/hooks/useCards";
import { useSet } from "@/hooks/useSet";
import { ISet } from "@/interfaces/Pokemon";
import {
  _getAllCards,
  _getAllSets,
  _getsingleSetData,
} from "@/services/pokemon.service";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  // const sets: ISet[] = await _getAllSets();

  const cards = await _getAllCards("neo3"); // card array of objects
  // console.log(cards);
  const tempPaths = cards.map((x) => x.set.id);

  let tempParams: { params: { id: string } }[] = [];

  for (let i = 0; i < 5; i++) {
    tempParams.push({ params: { id: tempPaths[i] } });
  }
  return {
    paths: tempParams,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context: any) => {
  const queryClient = new QueryClient();
  const id = context.params.id as string;
  await queryClient.prefetchQuery({
    queryKey: [CardQueryKey.Cards],
    queryFn: async () => {
      const cards = await _getAllCards(id);
      return cards;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 20 };
};

const Pokemon = () => {
  const { data } = useCards();
  console.log(data);

  if (data !== undefined) {
    return (
      <>
        <HeaderComponent />
        <div className="flex flex-wrap pt-20 justify-center">
          {data.map((card) => (
            <div
              key={card.id}
              className="p-4 m-4 rounded bg-white dark:bg-gray-800"
            >
              <Image
                src={card.images.small}
                alt={card.name + "images"}
                width={200}
                height={200}
                className="pr-4"
              />
            </div>
          ))}
        </div>
      </>
    );
  }
  return <LoadingComponent type="spin" color="#ff0000" />;
};

export default Pokemon;
