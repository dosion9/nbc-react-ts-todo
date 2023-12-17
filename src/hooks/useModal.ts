import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { closeModal, confirmModal, updateModal } from "../redux/modules/modalSlice";
import { useEffect } from "react";
import { ModalContent } from "types/modalType";

export const useModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modalSlice);
  const { isConfirm } = modalState;

  useEffect(() => {
    if (isConfirm) {
      dispatch(closeModal());
    }
  }, [isConfirm, dispatch]);

  const onCloseModal = () => dispatch(closeModal());

  const onUpdateModal = (content: ModalContent) => {
    dispatch(updateModal(content));
    return isConfirm;
  };

  const onConfirmModal = () => dispatch(confirmModal());

  return { modalState, onCloseModal, onUpdateModal, onConfirmModal };
};
