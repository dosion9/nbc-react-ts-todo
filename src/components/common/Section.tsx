import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

function Section({ title, children }: PropsWithChildren<Props>) {
  return (
    <StSection>
      <h1 className="section__title">{title}</h1>
      {children}
    </StSection>
  );
}

const StSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
  border: 3px solid ${({ theme }) => theme.color.base};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.borderRadius};

  & .section__title {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
  }
`;
export default Section;
