import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from 'react-helmet';
import { PostWrapper, PostTitle, PostContent } from './style';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("/noticias.json")
      .then((response) => {
        const postEncontrado = response.data.find((n) => n.id === parseInt(id));
        setPost(postEncontrado);
      })
      .catch((error) => console.error("Erro ao buscar a notícia:", error));
  }, [id]);

  const renderContent = () => {
    if (!post) {
      return <PostWrapper>Carregando...</PostWrapper>;
    }

    // Função para separar o conteúdo em parágrafos
    const createParagraphs = () => {
      return post.conteudo
        .split("\n\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    };

    return (
      <PostWrapper>
        <Helmet>
          <title>Hora da Tecnologia - {post.titulo}</title>
          <meta name="description" content={post.descricao} />
          <meta
            name="keywords"
            content="palavra-chave1, palavra-chave2, palavra-chave3"
          />
          <meta property="og:title" content={post.titulo} />
          <meta property="og:description" content={post.descricao} />
          <meta property="og:image" content={post.imagem} />
          <meta property="og:url" content={`https://seusite.com/${id}`} />
          <meta property="og:type" content="article" />
          <meta
            property="article:published_time"
            content={post.dataPublicacao} // Assumindo que há uma data de publicação no formato adequado
          />
          <meta property="article:author" content="Nome do Autor" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.titulo} />
          <meta name="twitter:description" content={post.descricao} />
          <meta name="twitter:image" content={post.imagem} />
          <link rel="canonical" href={`https://seusite.com/${id}`} />
        </Helmet>
        <img src={post.imagem} alt={post.titulo} />
        <PostTitle>{post.titulo}</PostTitle>
        <PostContent>{createParagraphs()}</PostContent>
      </PostWrapper>
    );
  };

  return renderContent();
};

export default Post;
