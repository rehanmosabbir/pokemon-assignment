import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/Enums";
import { _editSetName } from "../services/pokemon.service";

export const useUpdateSetName = (initialSets?: PokemonTCG.Set[]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ setid, setName }: { setid: string; setName: string }) =>
      _editSetName(setid, setName),
    onSuccess: (data, variable) => {
      console.log("successful");
      queryClient.setQueryData(
        [QueryKeys.CardSets],
        (initialSets?: PokemonTCG.Set[]) => {
          let foundSet = initialSets?.find((set) => set.id === variable.setid);
          console.log(foundSet, "founded set");
          if (foundSet) {
            foundSet.name = variable.setName;
          }
          return initialSets;
        }
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
