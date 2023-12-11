import React, { FunctionComponent } from "react";
import { GetServerSidePropsContext } from "next";
import Loading from "@/components/LoadingComponent";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/enums";
import { _getAllSets } from "@/services/pokemon.service";
import PokemonComponent from "@/components/PokemonComponent";
import { useSets } from "@/hooks/useSets";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

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

const Home: FunctionComponent = () => {
  const object = useSets();
  const setObject = [...object.data!];
  setObject.reverse();
  if (!object) {
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
      <div className="flex flex-wrap p-20 justify-between">
        {!object.isLoading ? (
          setObject?.map((pokemon) => (
            <PokemonComponent
              pokemon={pokemon}
              key={pokemon.id}
            ></PokemonComponent>
          ))
        ) : (
          <Loading type="spin" color="#ff0000" />
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
