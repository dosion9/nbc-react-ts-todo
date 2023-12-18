import { create } from "zustand";

type useSpinnerStoreType = {
  isOpen: boolean;
  updateSpinner: (boolean: boolean) => void;
};

export const useSpinnerStore = create<useSpinnerStoreType>()((set) => ({
  isOpen: false,
  updateSpinner: (boolean: boolean) => set(() => ({ isOpen: boolean }))
}));
