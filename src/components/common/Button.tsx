import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ color, onClick, children }: PropsWithChildren<Props>) {
  return (
    <StButton color={color} onClick={onClick}>
      {children}
    </StButton>
  );
}

const StButton = styled.button<{ color: string }>`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, color }) => theme.color[color]};
  border: 3px solid ${({ theme, color }) => (color ? theme.color[color] : theme.color.base)};
  transition: 0.2s;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, color }) => (color ? theme.color[`${color}Light`] : theme.color.baseLight)};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, color }) => (color ? theme.color[`${color}Dark`] : theme.color.baseDark)};
  }
`;

export default Button;
