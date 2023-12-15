import Button from "components/common/Button";
import styled from "styled-components";
import Dimmer from "./Dimmer";
import { ModalStateType } from "types";

type PropsType = {
  modalState: ModalStateType;
  onClickClose: () => void;
};

function Modal({ modalState, onClickClose }: PropsType) {
  const { isOpen, onClick, content } = modalState;

  if (!isOpen) return <></>;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    onClickClose();
  };

  return (
    <>
      <Dimmer />
      <StModal>
        <StContent>
          <p> {content}</p>
        </StContent>
        <StFooter>
          {onClick ? (
            <>
              <Button color="success" onClick={handleClick}>
                확인
              </Button>
              <Button color="danger" onClick={onClickClose}>
                취소
              </Button>
            </>
          ) : (
            <Button color="success" onClick={onClickClose}>
              확인
            </Button>
          )}
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
