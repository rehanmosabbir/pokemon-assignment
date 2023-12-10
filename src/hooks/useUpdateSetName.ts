import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { _editSetName } from "../services/pokemon.service";
import { QueryKeys } from "@/enums";

export const useUpdateSetName = (initialSets?: PokemonTCG.Set[]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ setid, setName }: { setid: string; setName: string }) =>
      _editSetName(setid, setName),
    onSuccess: (data, variable) => {
      console.log(variable.setName, "In useUpdateSetName");
      console.log("successful");
      queryClient.setQueryData(
        [QueryKeys.CardSets],
        (initialSets?: PokemonTCG.Set[]) => {
          let foundSet = initialSets?.find((set) => set.id === variable.setid);
          console.log(foundSet, "founded set");
          if (foundSet) {
            foundSet.name = variable.setName;
          }
          // console.log(initialSets, "In useUpdateSetName");
          return initialSets;
        }
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
