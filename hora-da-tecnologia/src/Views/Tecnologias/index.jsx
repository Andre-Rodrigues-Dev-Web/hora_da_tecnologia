import React, { useState, useEffect } from "react";
import axios from "axios";
import bannerSite from "../../assets/imgs/logo/logo.jpg";
import {
  PaginationWrapper,
  PaginationButton,
  ContainerContents,
  ContentLeft,
  ContentRight,
  TecnologiasWrapper,
  TitleHero
} from "./style";
import Card from "../../Shared/Components/Card";
import Seo from "../../Shared/Components/Seo";
import Tutoriais from "./tutoriais";

const Tecnologias = () => {
  const [noticias, setNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    axios
      .get("/noticias.json")
      .then((response) => setNoticias(response.data))
      .catch((error) => console.error("Erro ao buscar as notícias:", error));
  }, []);

  // Filtrando as notícias
  const filteredNoticias = noticias.filter(
    (noticia) => noticia.categoria !== "Tecnologia e negócio"
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNoticias.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ContainerContents>
      <Seo
        title="Notícias da Hora da Tecnologia"
        description="Confira as últimas notícias de tecnologia na Hora da Tecnologia."
        keywords="tecnologia, notícias de tecnologia, Hora da Tecnologia"
        image={bannerSite}
        url="https://www.horadatecnologia.com.br/tecnologias"
        author="André Laurentino Rodrigues"
      />
      <ContentLeft>
        <TecnologiasWrapper>
          {currentItems.map((noticia) => (
            <Card
              key={noticia.id}
              titulo={noticia.titulo}
              imagem={noticia.imagem}
              descricao={noticia.descricao}
              link={`/post/${noticia.slug}`}
              widthCardNews="33.33%"
            />
          ))}
        </TecnologiasWrapper>
        <PaginationWrapper>
          <PaginationButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </PaginationButton>
          <PaginationButton
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredNoticias.length}
          >
            Próximo
          </PaginationButton>
        </PaginationWrapper>
      </ContentLeft>
      <ContentRight>
        <TitleHero>Tutoriais da semana</TitleHero>
        <Tutoriais />
        <TitleHero>Downloads</TitleHero>
        <TitleHero>Parceiros</TitleHero>
      </ContentRight>
    </ContainerContents>
  );
};

export default Tecnologias;
