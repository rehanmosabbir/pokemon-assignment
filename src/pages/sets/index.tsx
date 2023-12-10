import React, { FunctionComponent } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/enums";
import { _getAllSets } from "@/services/pokemon.service";
import { useUpdateSetName } from "@/hooks/useUpdateSetName";
import { useSets } from "@/hooks/useSets";
import LoadingComponent from "@/components/LoadingComponent";
import PokemonSetComponent from "@/components/PokemonSetComponent";
import HeaderComponent from "@/components/HeaderComponent";

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

const Sets: FunctionComponent = () => {
  const setObject = useSets();
  const { mutate: updateName } = useUpdateSetName();
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
    <div className="flex flex-wrap justify-around">
      <HeaderComponent />
      {!setObject.isLoading ? (
        setObject.data?.map((pokemon) => (
          <PokemonSetComponent
            pokemon={pokemon}
            key={pokemon.id}
            updateName={updateName}
          ></PokemonSetComponent>
        ))
      ) : (
        <LoadingComponent type="spin" color="#ff0000" />
      )}
    </div>
  );
};

export default Sets;
