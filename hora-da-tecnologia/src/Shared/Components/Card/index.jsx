import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardCategoria,
  CardDescription,
} from './style';

const Card = ({ titulo, imagem, categoria, descricao, link }) => (
  <CardWrapper>
    <Helmet>
      <title>{titulo}</title>
      <meta name="description" content={descricao} />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={descricao} />
      <meta property="og:image" content={imagem} />
      <meta property="og:url" content={`https://https://www.horadatecnologia.com.br/${link}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titulo} />
      <meta name="twitter:description" content={descricao} />
      <meta name="twitter:image" content={imagem} />
    </Helmet>
    <CardImage src={imagem} />
    <CardCategoria>{categoria}</CardCategoria>
    <CardTitle>{titulo}</CardTitle>
    <CardDescription>{descricao}</CardDescription>
    <Link to={link}>Confira o artigo</Link>
  </CardWrapper>
);

export default Card;
