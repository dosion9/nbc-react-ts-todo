import React from "react";
import styled from "styled-components";

type PropsType = {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  labelTitle: string;
};

function Input({ value, onChange, labelTitle }: PropsType) {
  return (
    <StWrap>
      <StLabel htmlFor="">{labelTitle}</StLabel>
      <StInput type="text" value={value} onChange={onChange} />
    </StWrap>
  );
}

const StWrap = styled.div`
  border: 3px solid ${({ theme }) => theme.color.base};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;

  &:hover,
  &:focus-within {
    box-shadow: 0 0 5px 5px #f58f3b4b;
  }
`;
const StLabel = styled.label`
  min-width: max-content;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.base};
`;
const StInput = styled.input`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border: none;
  outline: none;
`;

export default Input;
