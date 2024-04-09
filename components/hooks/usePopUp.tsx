import { create } from "zustand";

interface PopupProps {
  isOpenModals: boolean;
  onOpenModals: (isOpenModals: boolean) => void;
  onCloseModals: () => void;
}

export const usePopup = create<PopupProps>((set) => ({
  isOpenModals: false,
  onOpenModals: (isOpenModals: boolean) => set({ isOpenModals }),
  onCloseModals: () => set({ isOpenModals: false }),
}));
