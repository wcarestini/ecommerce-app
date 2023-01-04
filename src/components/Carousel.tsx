import { useState } from "react";
import styled from "styled-components";

export function Carousel({ products }) {
  const [position, setPosition] = useState(0);

  const SWrapper = styled.div`
    overflow: hidden;
    width: 100%;
  `;
  const SCarouselContainer = styled.div`
    position: relative;

    &:before {
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
      );
      position: absolute;
      left: 0;
      height: 100%;
      width: 48px;
      content: "";
      z-index: 2;
    }

    &:after {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
      );
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 48px;
      content: "";
      z-index: 2;
    }
  `;
  const SCarouselItem = styled.div`
    flex: 1 0 100%;
    overflow: hidden;
    height: 50vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 4em;
  `;
  const Image = styled.img`
    width: 20em;
    height: 15em;

    object-fit: fill;
  `;
  const SButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;
    top: calc(50% - 0.5 * 3rem);
    padding: 0 2em;
    display: flex;
    justify-content: center;
    z-index: 3;
    font-size: large;
  `;
  const SPreviousButton = styled(SButton)`
    left: 0;
  `;
  const SNextButton = styled(SButton)`
    right: 0;
  `;
  const SCarouselImages = styled.div.attrs({
    style: {
      transform: "translateX(" + position * -100 + "%)",
    },
  })`
    display: flex;
    transition: transform 0.45s ease;
  `;

  function handleArrowClick(direction: string) {
    let newPosition = 0;
    if (direction === "NEXT") {
      newPosition = position === products.length - 1 ? 0 : position + 1;
    } else {
      newPosition = position == 0 ? products.length - 1 : position - 1;
    }
    setPosition(newPosition);
  }
  function handlePreviousClick() {
    handleArrowClick("PREVIOUS");
  }
  function handleNextClick() {
    handleArrowClick("NEXT");
  }
  function handleBtnClick() {
    console.log(products[position]);
  }

  return (
    <SWrapper>
      <SCarouselContainer>
        <SCarouselImages position={position}>
          {products.map((product) => (
            <SCarouselItem>
              <Image src={product.imageUrl} alt="" />
              <h1>{product.name}</h1>
              <button onClick={() => handleBtnClick()}>Compra</button>
            </SCarouselItem>
          ))}
        </SCarouselImages>
        <SPreviousButton onClick={() => handlePreviousClick()}>
          <SButton>{"<"}</SButton>
        </SPreviousButton>
        <SNextButton onClick={() => handleNextClick()}>
          <SButton>{">"}</SButton>
        </SNextButton>
      </SCarouselContainer>
    </SWrapper>
  );
}
