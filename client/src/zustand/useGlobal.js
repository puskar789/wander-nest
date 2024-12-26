import { create } from "zustand";

const useGlobal = create((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
  images: [],
  setImages: (value) =>
    set((state) => ({
      images: typeof value === "function" ? value(state.images) : value,
    })),
  title: "",
  setTitle: (value) => set({ title: value }),
  description: "",
  setDescription: (value) => set({ description: value }),
  price: 0,
  setPrice: (value) => set({ price: value }),
  radio: false,
  setRadio: (value) => set({ radio: value }),
  lng: 0,
  setLng: (value) => set({ lng: value }),
  lat: 0,
  setLat: (value) => set({ lat: value }),
  rooms: [],
  setRooms: (value) => set({ rooms: value }),
  filterPrice: 50,
  setFilterPrice: (value) => set({ filterPrice: value }),
  filterLng: 0,
  setFilterLng: (value) => set({ filterLng: value }),
  filterLat: 0,
  setFilterLat: (value) => set({ filterLat: value }),
  filteredRooms: [],
  setFilteredRooms: (value) => set({ filteredRooms: value }),
  selectedRoom: null,
  setSelectedRoom: (value) => set({ selectedRoom: value }),
}));

export default useGlobal;
