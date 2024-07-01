import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const Icon = styled(FaExclamationTriangle)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #056cf2;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid #056cf2;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #056cf2;
    color: #fff;
  }
`;

const Erro = () => {
  return (
    <Container>
      <Icon />
      <Heading>404 - Página não encontrada</Heading>
      <Message>A página que você está procurando não está disponível no momento.</Message>
      <StyledLink to="/">Voltar para a página inicial</StyledLink>
    </Container>
  );
};

export default Erro;
