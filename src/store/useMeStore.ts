import { create } from 'zustand';

interface MeState {
  me: MeProps | null;
  setMe: (me: MeProps) => void;
  clearMe: () => void;
}

export const useMeStore = create<MeState>()((set) => ({
  me: null,
  setMe: (me) => set(() => ({ me: me })),
  clearMe: () => set({ me: null }),
}));
