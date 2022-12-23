import { useContext } from "react";
import { Context } from "../../config/Context";
import { Carousel } from "../../components/carousel";
import styled from "styled-components";

export function Home() {
  const SHomeMain = styled.main`
    width: 100vw;

    display: flex;
    flex-direction: column;

    padding: 0 5rem 0 5rem;
  `;

  return (
    <SHomeMain>
      <Carousel />
      <h1>ola</h1>
    </SHomeMain>
  );
}
