import { create } from "zustand";

type Store = {
  isLogin: boolean;
  setIsLogin: () => void;
};

export const useLogStore = create<Store>()((set) => ({
  isLogin: false,
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
}));
