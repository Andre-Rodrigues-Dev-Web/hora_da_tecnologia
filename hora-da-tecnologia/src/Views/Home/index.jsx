// ListaNoticias.js
import React from 'react';
import { Link } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import remark from 'remark';
import remarkHTML from 'remark-html';

const Home = () => {
  // Leitura dos arquivos de notícias
  const noticiasDir = path.resolve(__dirname, 'noticias');
  const noticias = fs.readdirSync(noticiasDir);

  const parseMarkdown = async (filename) => {
    const markdownPath = path.join(noticiasDir, filename);
    const markdownContent = fs.readFileSync(markdownPath, 'utf-8');
    const { metadata } = await remark()
      .use(remarkHTML)
      .process(markdownContent);

    return { metadata, slug: filename.replace('.md', '') };
  };

  return (
    <div className="noticias">
      {noticias.map((noticia, index) => {
        const { metadata, slug } = parseMarkdown(noticia);

        return (
          <div key={index} className="noticia-card">
            <h2>{metadata.title}</h2>
            <img src={metadata.image} alt={metadata.title} />
            <p>Categoria: {metadata.category}</p>
            <Link to={`/noticia/${slug}`}>Visualizar notícia completa</Link>
          </div>
        );
      })}
    </div>
  );
};

export default <Home></Home>;
