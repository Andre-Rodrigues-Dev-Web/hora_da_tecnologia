import styled from "styled-components";

const ContainerContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContentLeft = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
const ContentRight = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

const TecnologiasWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-left: 10em;
  }
`;

const PaginationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 10px 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TitleHero = styled.h1`
  font-size: 2em;
  margin-bottom: 16px;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background-color: #007bff;
    position: absolute;
    bottom: -8px;
    left: 20%;
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    font-size: 1.6em;
    padding: 20px 0;
    text-align: left;
    &:after {
      bottom: 13px;
      left: 19%;
    }
  }
`;

const ListCardSidebar = styled.div`
  display: flex;
  flex-direction: column;
  li {
    margin-bottom: 10px;
  }
`;

const CardSidebar = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 16px;
  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .container-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      margin-bottom: 4px;
    }
    p {
      margin-bottom: 8px;
    }
    a {
      background-color: #007bff;
      border-radius: 4px;
      color: #fff;
      display: inline-block;
      font-size: 0.8em;
      padding: 4px 8px;
      text-align: center;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    padding: 10px;
    img {
      height: 60px;
      width: 60px;
      margin-right: 16px;
    }
    .container-text{
      h3{
        font-size: 1.2em;
      }
      p{
        font-size: 1em;
        font-weight: 600;
      }
      a{
        font-size: 0.8em;
        padding: 7px 20px;
      }
    }
  }
`;

export {
  ContainerContents,
  ContentLeft,
  ContentRight,
  TecnologiasWrapper,
  PaginationWrapper,
  PaginationButton,
  TitleHero,
  ListCardSidebar,
  CardSidebar,
};
