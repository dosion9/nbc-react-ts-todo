import Dimmer from "components/Modal/Dimmer";
import { useSpinnerStore } from "store/spinnerStore";
import styled, { keyframes } from "styled-components";

function Spinner() {
  const { isOpen } = useSpinnerStore();
  if (!isOpen) return <></>;
  return (
    <>
      <Dimmer />
      <StSpinner />
    </>
  );
}

const StRotation = keyframes`
  0% {
    transform:  translate(-50%, -50%) rotate(0deg);
}
100% {
    transform:  translate(-50%, -50%) rotate(360deg);
}  
`;

const StSpinner = styled.span`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 10rem;
  height: 10rem;
  border: 10px solid ${({ theme }) => theme.color.baseDark};
  border-bottom-color: ${({ theme }) => theme.color.base};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${StRotation} 1s linear infinite;
  z-index: 100;
`;

export default Spinner;
