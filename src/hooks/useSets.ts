import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/enums";
import { _getAllSets } from "../services/pokemon.service";
import { ISet } from "@/interfaces/Pokemon";

export const useSets = (isEnabled: boolean = false) => {
  return useQuery<ISet[]>({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await _getAllSets();
      return sets;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: false,
    enabled: true,
    retry: 1,
  });
};
