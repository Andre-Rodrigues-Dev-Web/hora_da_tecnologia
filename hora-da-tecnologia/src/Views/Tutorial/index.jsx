import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Importa o tema do PrismJS
import {
  PostWrapper,
  PostTitle,
  SharedTitle,
  PostContent,
  ShareButton,
} from "./style";

const Tutorial = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/tutoriais.json")
      .then((response) => {
        const postEncontrado = response.data.find((n) => n.slug === slug);
        setPost(postEncontrado);
      })
      .catch((error) => {
        console.error("Erro ao buscar o tutorial:", error);
        setError("Erro ao carregar o tutorial. Tente novamente mais tarde.");
      });
  }, [slug]);

  useEffect(() => {
    // Destaque o código sempre que o conteúdo for atualizado
    if (post) {
      Prism.highlightAll();
    }
  }, [post]);

  const handleShare = (network) => {
    if (!post) return;
    
    const shareUrl = `https://www.horadatecnologia.com.br/${slug}`;
    switch (network) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(post.titulo)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
            shareUrl
          )}&title=${encodeURIComponent(
            post.titulo
          )}&summary=${encodeURIComponent(
            post.descricao
          )}&source=Hora%20da%20Tecnologia`
        );
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            post.titulo
          )} - ${encodeURIComponent(shareUrl)}`
        );
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    if (error) {
      return <PostWrapper>{error}</PostWrapper>;
    }

    if (!post) {
      return <PostWrapper>Carregando...</PostWrapper>;
    }

    const createParagraphs = () => {
      return post.conteudo
        .split("\n\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    };

    const createParagraphsFormat = () => {
      const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
      const htmlWithCode = post.conteudo.replace(codeBlockRegex, (match, lang, code) => {
        return `<pre><code class="language-${lang || 'javascript'}">${Prism.highlight(code, Prism.languages[lang || 'javascript'], lang || 'javascript')}</code></pre>`;
      });

      return <div className="post-content" dangerouslySetInnerHTML={{ __html: htmlWithCode }} />;
    };

    return (
      <PostWrapper>
        <Helmet>
          <title>Hora da Tecnologia - {post.titulo}</title>
          <meta name="description" content={post.descricao} />
          <meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3" />
          <meta property="og:title" content={post.titulo} />
          <meta property="og:description" content={post.descricao} />
          <meta property="og:image" content={post.imagem} />
          <meta property="og:image:secure_url" content={post.imagem} />
          <meta property="og:url" content={`https://www.horadatecnologia.com.br/${slug}`} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={post.dataPublicacao} />
          <meta property="article:author" content="Nome do Autor" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.titulo} />
          <meta name="twitter:description" content={post.descricao} />
          <meta name="twitter:image" content={post.imagem} />
          <link rel="canonical" href={`https://www.horadatecnologia.com.br/${slug}`} />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="referrer" content="origin-when-crossorigin" />
          <meta name="revisit-after" content="7 days" />
        </Helmet>
        <img src={post.imagem} alt={post.titulo} />
        <PostTitle>{post.titulo}</PostTitle>
        {post.id === 0 || post.id === 5 || post.id === 6 || post.id === 7 ? createParagraphsFormat() : <PostContent>{createParagraphs()}</PostContent>}
        <SharedTitle>Compartilhe nas redes sociais</SharedTitle>
        <ShareButton network="twitter" onClick={() => handleShare("twitter")}>
          <FaTwitter /> Compartilhar no Twitter
        </ShareButton>
        <ShareButton network="facebook" onClick={() => handleShare("facebook")}>
          <FaFacebook /> Compartilhar no Facebook
        </ShareButton>
        <ShareButton network="linkedin" onClick={() => handleShare("linkedin")}>
          <FaLinkedin /> Compartilhar no Linkedin
        </ShareButton>
        <ShareButton network="whatsapp" onClick={() => handleShare("whatsapp")}>
          <FaWhatsapp /> Compartilhar no WhatsApp
        </ShareButton>
      </PostWrapper>
    );
  };

  return renderContent();
};

export default Tutorial;
