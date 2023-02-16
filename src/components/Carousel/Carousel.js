import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
const images = [
  "https://i.imgur.com/ZYncCQ8.png",
  "https://i.imgur.com/qQ1m4kC.png",
  "https://i.imgur.com/2bPnKY2.png",
  "https://i.imgur.com/oUYrDoW.png",
  "https://i.imgur.com/8hYQzQd.png"
];

const slide = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-200%); }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-height: 400px;
    height: auto;
    margin: 0 auto;  
  }
  @media (max-width: 700px) {
     flex-direction: row;
     img {
        width: 100%;
     }
  }
`;

const SlideContainer = styled.div`
  display: flex;
`;

const Slide = styled.div`
  width: 33.33%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DotContainer = styled.div`
  @media (max-width: 700px) {
    position: absolute;
    bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#000" : "#ddd")};
  margin: 0 0.5rem;
  cursor: pointer;
`;

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <Wrapper currentImage={currentImage}>
      <SlideContainer>
        <img src={images[currentImage]}/>
      </SlideContainer>
      <DotContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentImage} onClick={() => handleDotClick(index)} />
        ))}
      </DotContainer>
    </Wrapper>
  );
};

export default Carousel;
