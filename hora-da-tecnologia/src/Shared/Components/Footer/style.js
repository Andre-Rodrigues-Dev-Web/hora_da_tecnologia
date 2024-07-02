import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    margin-right: 10px;
  }

  svg {
    font-size: 2rem;
  }
`;

export const Links = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 20px;
      width: 750px;
    }
  }

  li {
    margin-right: 10px;
    margin-bottom: 5px;
    &:last-child{
        margin-right: 0;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #f0f0f0;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;

  svg {
    font-size: 1.5rem;
    margin-left: 10px;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #f0f0f0;
    }
  }
`;

export const InstagramIcon = styled(AiOutlineInstagram)`
  font-size: 1.5rem;
  margin-left: 10px;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #f0f0f0;
  }
`;

export const Copyright = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: #bbb;
  font-size: 0.8rem;
`;
