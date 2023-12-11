import { useQuery } from "@tanstack/react-query";
import { CardQueryKey } from "@/enums";
import { _getAllCards } from "../services/pokemon.service";
import { ICard } from "@/interfaces/Pokemon";
import { useRouter } from "next/router";

export const useCards = (isEnabled: boolean = false) => {
  const router = useRouter();
  const id = router.query?.id;
  return useQuery<ICard[]>({
    queryKey: [CardQueryKey.Cards],
    queryFn: async () => {
      const cards = await _getAllCards(id as string);
      return cards;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: false,
    enabled: true,
    retry: 1,
  });
};
