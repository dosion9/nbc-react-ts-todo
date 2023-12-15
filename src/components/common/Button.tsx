import { PropsWithChildren } from "react";
import styled from "styled-components";

type PropsType = {
  color?: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ color, onClick, disabled, children }: PropsWithChildren<PropsType>) {
  return (
    <StButton color={color} onClick={onClick} disabled={disabled}>
      {children}
    </StButton>
  );
}

const StButton = styled.button<{ color?: string }>`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.base)};
  border: 3px solid ${({ theme, color }) => (color ? theme.color[color] : theme.color.base)};
  transition: 0.2s;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, color }) => (color ? theme.color[`${color}Light`] : theme.color.baseLight)};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, color }) => (color ? theme.color[`${color}Dark`] : theme.color.baseDark)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.disabled};
    border: 3px solid ${({ theme }) => theme.color.disabled};
    cursor: not-allowed;
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.disabled};
    }
  }
`;

export default Button;
