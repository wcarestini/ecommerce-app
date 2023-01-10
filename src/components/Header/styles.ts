import styled from "styled-components";

export const Container = styled.header`
  background: #ffffff;
  height: 5rem;
  padding: 4rem 2rem 4rem 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;

export const Title = styled.h1`
  cursor: pointer;

  color: black;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  background: rgba(0, 0, 0, 5%);

  padding: 0.5rem;
  width: 70%;

  &:hover {
    box-shadow: 0 0 60px rgba(255, 255, 255, 0.05);
  }
`;

export const Link = styled.a`
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
`;
