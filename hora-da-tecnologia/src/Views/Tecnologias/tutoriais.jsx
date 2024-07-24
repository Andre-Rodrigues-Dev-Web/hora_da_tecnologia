import React, { useState, useEffect } from "react";
import axios from "axios";
import bannerSite from "../../assets/imgs/logo/logo.jpg";
import { ListCardSidebar, CardSidebar } from "./style";
import { Link } from "react-router-dom";

const Tutoriais = () => {
  const [tutoriais, setTutoriais] = useState([]);

  useEffect(() => {
    const fetchTutoriais = async () => {
      try {
        const response = await axios.get("/tutoriais.json");
        setTutoriais(response.data);
      } catch (error) {
        console.error("Erro ao buscar os tutoriais:", error);
      }
    };

    fetchTutoriais();
  }, []);

  return (
    <ListCardSidebar>
      {tutoriais.map((tutorial) => (
        <li key={tutorial.id}>
          <CardSidebar>
            <img src={tutorial.imagem || bannerSite} alt={`Imagem do card de ${tutorial.titulo}`} />
            <div className="container-text">
              <h3>{tutorial.titulo}</h3>
              <Link to={`/tutoriais/${tutorial.slug}`}>Visualizar</Link>
            </div>
          </CardSidebar>
        </li>
      ))}
    </ListCardSidebar>
  );
};

export default Tutoriais;
