// npm i zustand
import {create} from "zustand";

// Creamos una especie de useState pero global y luego lo exportamos
export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
    setVolume: (volume) => set({volume}),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
  }))