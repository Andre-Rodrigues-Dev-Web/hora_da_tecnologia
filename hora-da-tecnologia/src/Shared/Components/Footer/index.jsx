// components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Brand = styled.div`
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

const Links = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 10px;
    margin-bottom: 5px;
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

const SocialIcons = styled.div`
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

const Copyright = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: #bbb;
  font-size: 0.8rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Brand>
        <h3>Hora da Tecnologia</h3>
      </Brand>
      <Links>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tecnologia">Tecnologia</Link>
          </li>
          <li>
            <Link to="/negocios">Negócios</Link>
          </li>
          <li>
            <Link to="/sobre-nos">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/anuncie">Anuncie</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </Links>
      <SocialIcons>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin />
        </a>
      </SocialIcons>
      <Copyright>
        &copy; {currentYear} André Laurentino Rodrigues. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
