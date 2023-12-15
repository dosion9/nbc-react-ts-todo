import { createSlice } from "@reduxjs/toolkit";
import { ModalContent, ModalStateType } from "types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ModalStateType = {
  isOpen: false,
  isConfirm: false,
  content: ModalContent.Default
};

const modalSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    closeModal: () => {
      return initialState;
    },
    updateModal: (state, action: PayloadAction<ModalContent>) => {
      const content = action.payload;
      state.content = content;
      state.isOpen = true;
    },
    confirmModal: (state) => {
      state.isConfirm = true;
    }
  }
});

export default modalSlice.reducer;
export const { closeModal, updateModal, confirmModal } = modalSlice.actions;
