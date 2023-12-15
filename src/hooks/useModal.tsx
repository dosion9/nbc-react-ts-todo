import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import { ModalStateType, ModalContent } from "types";

export const useModal = () => {
  const initialState = { isOpen: false, content: ModalContent.Default };
  const [modalState, setModalState] = useState<ModalStateType>(initialState);

  const onClickClose = () => setModalState(initialState);

  const updateModal = (content: ModalContent, onClick?: React.MouseEventHandler<HTMLButtonElement>) => {
    setModalState({ content: content, isOpen: true, ...(onClick && { onClick: onClick }) });
  };

  const modal = <Modal modalState={modalState} onClickClose={onClickClose} />;

  return { modal, updateModal };
};
