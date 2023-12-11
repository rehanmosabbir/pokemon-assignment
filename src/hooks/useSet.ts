import { QueryKey } from "@/enums";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ISet } from "@/interfaces/Pokemon";
import { _getsingleSetData } from "@/services/pokemon.service";

export const useSet = (isEnabled: boolean = false) => {
  const router = useRouter();
  const id = router.query?.id;
  return useQuery<ISet>({
    queryKey: [QueryKey.CardSet],
    queryFn: async () => {
      const set = await _getsingleSetData(id as string);
      return set;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: false,
    enabled: true,
    retry: 5,
  });
};
