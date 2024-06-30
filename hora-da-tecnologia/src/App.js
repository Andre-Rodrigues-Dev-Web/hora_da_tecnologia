import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./Views/Home";
import Erro from "./Views/Erro";
import SobreNos from './Views/SobreNos'
import Post from "./Views/Post";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<SobreNos />} />
        <Route path="/post/:id" component={Post} />
        <Route path="*" element={<Erro />} />
      </Route>
    </Routes>
  );
};

export default App;
