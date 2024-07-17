import { create } from "zustand";

type Store = {
    isDark: boolean
    toggleDark: () => void
}

const useStore = create<Store>()((set) => ({
    isDark: false,
    toggleDark: () => set((state) => ({ isDark: !state.isDark })),
}))

export default useStore;