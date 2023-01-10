import styled from "styled-components";

export const Container = styled.section`
  min-height: 50vh;
  padding: 0 2rem 2rem 2rem;
  background: url("/backgound-mobile.svg") no-repeat;
  background-position: right top;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  width: 50%;
  font-size: 1.2rem;
`;
