import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from '../../Shared/Components/Card';

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
`;

const Home = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get('/noticias.json')
      .then(response => setNoticias(response.data))
      .catch(error => console.error('Erro ao buscar as notícias:', error));
  }, []);

  return (
    <HomeWrapper>
      {noticias.map(noticia => (
        <Card 
          key={noticia.id}
          titulo={noticia.titulo}
          imagem={noticia.imagem}
          descricao={noticia.descricao}
          link={`/post/${noticia.id}`}
        />
      ))}
    </HomeWrapper>
  );
};

export default Home;
