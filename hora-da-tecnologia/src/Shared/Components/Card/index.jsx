import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 8px 0;
`;

const CardImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardCategoria = styled.small`
  font-size: 1em;
  margin: 0 0 16px 0;
`;
const CardDescription = styled.p`
  font-size: 1em;
  margin: 0 0 16px 0;
`;

const Card = ({ titulo, imagem, categoria, descricao, link }) => (
  <CardWrapper>
    <CardImage src={imagem} />
    <CardCategoria>{categoria}</CardCategoria>
    <CardTitle>{titulo}</CardTitle>
    <CardDescription>{descricao}</CardDescription>
    <Link to={link}>Confira o artigo</Link>
  </CardWrapper>
);

export default Card;
