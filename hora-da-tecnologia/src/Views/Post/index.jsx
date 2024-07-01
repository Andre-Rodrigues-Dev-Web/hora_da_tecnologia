import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PostWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 800px;
`;

const PostTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const PostContent = styled.div`
  font-size: 1.2em;
  line-height: 1.6;

  p {
    margin-bottom: 30px; /* Adiciona espaço entre os parágrafos */
  }
`;

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('/noticias.json')
      .then(response => {
        const postEncontrado = response.data.find(n => n.id === parseInt(id));
        setPost(postEncontrado);
      })
      .catch(error => console.error('Erro ao buscar a notícia:', error));
  }, [id]);

  const renderContent = () => {
    if (!post) {
      return <PostWrapper>Carregando...</PostWrapper>;
    }

    // Função para separar o conteúdo em parágrafos
    const createParagraphs = () => {
      return post.conteudo.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    };

    return (
      <PostWrapper>
        <img src={post.imagem} alt={post.titulo} />
        <PostTitle>{post.titulo}</PostTitle>
        <PostContent>{createParagraphs()}</PostContent>
      </PostWrapper>
    );
  };

  return renderContent();
};

export default Post;
