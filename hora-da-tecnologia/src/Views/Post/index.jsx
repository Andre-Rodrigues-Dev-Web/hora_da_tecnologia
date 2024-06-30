// NoticiaCompleta.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import remark from 'remark';
import remarkHTML from 'remark-html';

const Post = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      const noticiasDir = path.resolve(__dirname, 'noticias');
      const markdownPath = path.join(noticiasDir, `${id}.md`);
      const markdownContent = fs.readFileSync(markdownPath, 'utf-8');
      const { metadata, contents } = await remark()
        .use(remarkHTML)
        .process(markdownContent);

      setNoticia({ ...metadata, conteudo: contents });
    };

    fetchNoticia();
  }, [id]);

  if (!noticia) return <div>Loading...</div>;

  return (
    <div className="noticia-completa">
      <h2>{noticia.title}</h2>
      <img src={noticia.image} alt={noticia.title} />
      <p>Data: {noticia.date}</p>
      <p>Autor: {noticia.author}</p>
      <p>Categoria: {noticia.category}</p>
      <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
    </div>
  );
};

export default Post;
