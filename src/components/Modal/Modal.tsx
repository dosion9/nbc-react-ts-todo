import Button from "components/common/Button";
import styled from "styled-components";
import Dimmer from "./Dimmer";
import { useModal } from "hooks";

function Modal() {
  const { modalState, onCloseModal, onConfirmModal } = useModal();

  if (!modalState.isOpen) return <></>;

  return (
    <>
      <Dimmer />
      <StModal>
        <StContent>
          <p> {modalState.content}</p>
        </StContent>
        <StFooter>
          <Button color="success" onClick={onConfirmModal}>
            확인
          </Button>
          <Button color="danger" onClick={onCloseModal}>
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
