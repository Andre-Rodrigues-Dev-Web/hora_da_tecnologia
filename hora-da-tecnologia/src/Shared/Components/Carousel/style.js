import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 90%;
`;

export const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  transition: transform 0.5s ease;
  @media(min-width: 768px){
    width: 962px;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  ${({ direction }) => (direction === "right" ? "right: 10px;" : "left: 10px;")}
  @media(min-width: 768px){
    left: 4em;
    ${({ direction }) => (direction === "right" ? "right: -24em;" : "left: 4em;")}
  }
`;

export const Placeholder = styled.div`
  background-color: #3498db;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  justify-content: center;
  height: 400px;
  width: 1200px;
`;
