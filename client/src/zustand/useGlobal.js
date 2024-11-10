import { create } from "zustand";

const useGlobal = create((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
  images: [],
  setImages: (value) =>
    set((state) => ({
      images: typeof value === "function" ? value(state.images) : value,
    })),
}));

export default useGlobal;
