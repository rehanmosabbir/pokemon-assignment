import HeaderComponent from "@/components/HeaderComponent";
import LoadingComponent from "@/components/LoadingComponent";
import { QueryKey } from "@/enums";
import { useSet } from "@/hooks/useSet";
import { ISet } from "@/interfaces/Pokemon";
import { _getAllSets, _getsingleSetData } from "@/services/pokemon.service";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const sets: ISet[] = await _getAllSets();
  const tempPaths = sets.map((x) => x.id);

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
    queryKey: [QueryKey.CardSet],
    queryFn: async () => {
      const set = await _getsingleSetData(id);
      return set;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 20 };
};

const Pokemon = () => {
  const { data } = useSet();

  if (data !== undefined) {
    return (
      <>
        <HeaderComponent />
        <div className="flex align-center justify-center pt-20">
          <div className="shadow-sm border p-4 m-4 w-1/3 flex items-center justify-between rounded bg-white dark:bg-gray-800">
            <Image
              src={data.images.logo}
              alt={data?.name + "images"}
              width={200}
              height={200}
              className="pr-4"
            />
            <div className="mt-4 border-l-2 pl-8">
              <h1 className="mt-4">
                <span className="font-bold">Name : </span>
                {data.name}
              </h1>
              <p>
                <span className="font-bold">Release Date : </span>
                {data.releaseDate}
              </p>
              <p>
                <span className="font-bold">Legalities: </span>
                {data.legalities.expanded}
              </p>
              <p>
                <span className="font-bold">Series : </span>
                {data.series}
              </p>
              <p className="mb-4">
                <span className="font-bold">Total : </span>
                {data.total}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <LoadingComponent type="spin" color="#ff0000" />;
};

export default Pokemon;
