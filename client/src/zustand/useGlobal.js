import { create } from "zustand";

const useGlobal = create((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
}));

export default useGlobal;
