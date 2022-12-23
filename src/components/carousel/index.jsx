import { Context } from "../../config/Context";
import React, { useContext, useState } from "react";
import styled from "styled-components";

export function Carousel() {
  const products = useContext(Context).products;

  const [position, setPosition] = useState(0);

  const SWrapper = styled.div`
    overflow: hidden;
    width: 50%;
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
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
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

  const handleArrowClick = (direction) => {
    let newPosition = 0;
    if (direction === "NEXT") {
      newPosition = position === products.length - 1 ? 0 : position + 1;
    } else {
      newPosition = position == 0 ? products.length - 1 : position - 1;
    }
    setPosition(newPosition);
  };

  const handlePreviousClick = () => {
    handleArrowClick("asdçfklj");
  };

  const handleNextClick = () => {
    handleArrowClick("NEXT");
  };

  const SCarouselImages = styled.div.attrs({
    style: {
      transform: "translateX(" + (position * -100) + "%)",
    },
  })`
    display: flex;
    transition: transform 0.45s smooth;
  `;

  return (
    <SWrapper>
      <SCarouselContainer>
        <SCarouselImages position={position}>
          {products.map((product) => (
            <SCarouselItem>
              {console.log(position)}
              <Image src={product.imageUrl} alt="" />
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
