import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { HomeWrapper, PaginationWrapper, PaginationButton } from './style';
import Card from '../../Shared/Components/Card';
import bannerSite from '../../assets/imgs/logo/logo.jpg'

const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    axios.get('/noticias.json')
      .then(response => setNoticias(response.data))
      .catch(error => console.error('Erro ao buscar as notícias:', error));
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = noticias.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>Notícias da Hora da Tecnologia</title>
        <meta name="description" content="Confira as últimas notícias de tecnologia na Hora da Tecnologia." />
        <meta name="keywords" content="tecnologia, notícias de tecnologia, Hora da Tecnologia" />
        {/* Meta tags de redes sociais */}
        <meta property="og:title" content="Notícias da Hora da Tecnologia" />
        <meta property="og:description" content="Confira as últimas notícias de tecnologia na Hora da Tecnologia." />
        <meta property="og:image" content={bannerSite} />
        <meta property="og:url" content="https://www.horadatecnologia.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="article:publisher" content="https://www.facebook.com/horadatecnologia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notícias da Hora da Tecnologia" />
        <meta name="twitter:description" content="Confira as últimas notícias de tecnologia na Hora da Tecnologia." />
        <meta name="twitter:image" content={bannerSite} />
        <meta name="author" content="André Laurentino Rodrigues" />
      </Helmet>
      <HomeWrapper>
        {currentItems.map(noticia => (
          <Card 
            key={noticia.id}
            titulo={noticia.titulo}
            imagem={noticia.imagem}
            descricao={noticia.descricao}
            link={`/post/${noticia.id}`}
          />
        ))}
      </HomeWrapper>
      <PaginationWrapper>
        <PaginationButton
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButton>
        <PaginationButton
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= noticias.length}
        >
          Próximo
        </PaginationButton>
      </PaginationWrapper>
    </>
  );
};

export default Home;
