import styled from "styled-components";

export const Container = styled.section`
  min-height: 50vh;
  padding: 0 2rem 2rem 2rem;
  background: url("/backgound-mobile.svg") no-repeat;
  background-position: right top;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    background: url("/background-pc.svg") no-repeat top right;
    height: 90vh;
    padding: 6rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  width: 50%;
  font-size: 1.2rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
