import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HomeWrapper, PaginationWrapper, PaginationButton } from './style'; // Importando os estilos do arquivo style.js
import Card from '../../Shared/Components/Card';

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
