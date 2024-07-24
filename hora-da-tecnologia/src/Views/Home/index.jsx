import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HomeWrapper, PaginationWrapper, PaginationButton } from './style';
import Card from '../../Shared/Components/Card';
import bannerSite from '../../assets/imgs/logo/logo.jpg'
import Carousel from '../../Shared/Components/Carousel';
import Seo from '../../Shared/Components/Seo';

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
      <Seo
        title="Notícias da Hora da Tecnologia"
        description="Confira as últimas notícias de tecnologia na Hora da Tecnologia."
        keywords="tecnologia, notícias de tecnologia, Hora da Tecnologia"
        image={bannerSite}
        url="https://www.horadatecnologia.com.br/tecnologias"
        author="André Laurentino Rodrigues"
      />
      <HomeWrapper>
        <Carousel />
        {currentItems.map(noticia => (
          <Card 
            key={noticia.id}
            titulo={noticia.titulo}
            imagem={noticia.imagem}
            descricao={noticia.descricao}
            link={`/post/${noticia.slug}`}
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
