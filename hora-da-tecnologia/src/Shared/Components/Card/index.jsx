import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardCategoria,
  CardDescription,
} from './style';

const Card = ({ titulo, imagem, categoria, descricao, link, larguraCard }) => (
  <CardWrapper widthCardNews={larguraCard}>
    <CardImage src={imagem} />
    <CardCategoria>{categoria}</CardCategoria>
    <CardTitle>{titulo}</CardTitle>
    <CardDescription>{descricao}</CardDescription>
    <Link to={link}>Confira o artigo</Link>
  </CardWrapper>
);

export default Card;
