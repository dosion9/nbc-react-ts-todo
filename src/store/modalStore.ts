import { ModalContent, ModalStateType } from "types";
import { create } from "zustand";

const initialState: ModalStateType = {
  isOpen: false,
  isConfirm: false,
  content: ModalContent.Default
};

type ModalAction = {
  closeModal: () => void;
  confirmModal: () => void;
  updateModal: (modalContent: ModalContent) => void;
};

export const useModalStore = create<ModalStateType & ModalAction>()((set) => ({
  ...initialState,
  closeModal: () => set(initialState),
  confirmModal: () => set(() => ({ isConfirm: true })),
  updateModal: (modalContent) => set(() => ({ content: modalContent, isOpen: true }))
}));
