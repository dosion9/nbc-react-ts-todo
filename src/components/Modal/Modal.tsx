import Button from "components/common/Button";
import styled from "styled-components";
import Dimmer from "./Dimmer";
import { useModalStore } from "store/modalStore";
import { useEffect } from "react";

function Modal() {
  const { content, isOpen, isConfirm, closeModal, confirmModal } = useModalStore();

  useEffect(() => {
    if (isConfirm) {
      closeModal();
    }
  }, [isConfirm, closeModal]);

  if (!isOpen) return <></>;

  return (
    <>
      <Dimmer />
      <StModal>
        <StContent>
          <p> {content}</p>
        </StContent>
        <StFooter>
          <Button color="success" onClick={confirmModal}>
            확인
          </Button>
          <Button color="danger" onClick={closeModal}>
            취소
          </Button>
        </StFooter>
      </StModal>
    </>
  );
}

const StModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
  top: 50%;
  left: 50%;
  background-color: white;
  width: 30rem;
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.borderRadius};
  transform: translateX(-50%) translateY(-50%);
  z-index: 1000;
`;

const StContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;
const StFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing.base};
`;

export default Modal;
