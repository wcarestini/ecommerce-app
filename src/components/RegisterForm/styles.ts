import styled from "styled-components";

export const Form = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  /* @media (min-width: 1024px) {
    width: 100%;
  } */
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const Input = styled.input`
  height: 4rem;
  border: none;
  border-radius: 5px;

  padding: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.5rem 0 1.5rem 0;
  background: rgba(0, 0, 0, 25%);
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
`;
