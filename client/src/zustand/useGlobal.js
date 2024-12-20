import { create } from "zustand";

const useGlobal = create((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
  images: [],
  setImages: (value) =>
    set((state) => ({
      images: typeof value === "function" ? value(state.images) : value,
    })),
  lng: 0,
  setLng: (value) => set({ lng: value }),
  lat: 0,
  setLat: (value) => set({ lat: value }),
}));

export default useGlobal;
