import { create } from "zustand";

interface useModalsProps {
  isOpenModals: boolean;
  onOpenModals: () => void;
  onCloseModals: () => void;
}

export const useModals = create<useModalsProps>((set) => ({
  isOpenModals: false,
  onOpenModals: () => set({ isOpenModals: true }),
  onCloseModals: () => set({ isOpenModals: false }),
}));
