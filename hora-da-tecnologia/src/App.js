import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./Views/Home";
import Erro from "./Views/Erro";
import SobreNos from './Views/SobreNos'
import Post from "./Views/Post";
import Negocios from "./Views/Negocios";
import Tecnologias from "./Views/Tecnologias";
import Tutorial from "./Views/Tutorial";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tecnologias" element={<Tecnologias />} />
        <Route path="negocios" element={<Negocios />} />
        <Route path="sobre-nos" element={<SobreNos />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/tutoriais/:slug" element={<Tutorial />} />
        <Route path="*" element={<Erro />} />
      </Route>
    </Routes>
  );
};

export default App;
