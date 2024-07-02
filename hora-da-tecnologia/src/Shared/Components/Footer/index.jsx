import React from 'react';
import { FooterContainer, Brand, Links, SocialIcons, Copyright, InstagramIcon } from './style';
import { Link } from 'react-router-dom';

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
        <a href="https://www.instagram.com/horadatecnologia_oficial/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </SocialIcons>
      <Copyright>
        &copy; {currentYear} André Laurentino Rodrigues. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
