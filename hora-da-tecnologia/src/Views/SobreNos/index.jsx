import React from "react";
import {
  Main,
  Article,
  Title,
  Content,
  MetaInfo,
  MetaItem,
  MetaText,
  AuthorInfo,
  AuthorAvatar,
  AuthorDescription,
  AuthorName,
  AuthorBio,
  AuthorLink,
} from "./style";
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";

const SobreNos = () => {
  return (
    <Main>
      <Article>
        <Title>Sobre Nós</Title>
        <Content>
          Bem-vindo ao blog "Hora da Tecnologia", seu guia online para explorar
          as últimas novidades e tendências no mundo da tecnologia. Aqui você
          encontrará artigos detalhados sobre desenvolvimento de software,
          design de interfaces, inovação digital, análise de sistemas,
          tecnologia, educação, tecnologia financeira, mundo dos jogos,
          agricultura, bem como dicas práticas e insights profundos para
          aprimorar suas habilidades técnicas.
        </Content>
        <MetaInfo>
          <MetaItem>
            <AiOutlineUser size={20} />
            <MetaText>Escrito por André Laurentino Rodrigues</MetaText>
          </MetaItem>
          <MetaItem>
            <AiOutlineClockCircle size={20} />
            <MetaText>Publicado em 1 de julho de 2024</MetaText>
          </MetaItem>
        </MetaInfo>
        <AuthorInfo>
          <AuthorAvatar
            src="https://scontent.fpoj5-1.fna.fbcdn.net/v/t39.30808-6/355482387_1394541374608627_3905388549022253524_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=sP4K4r3dyn4Q7kNvgHR9cFe&_nc_ht=scontent.fpoj5-1.fna&cb_e2o_trans=t&oh=00_AYDYy0UKbgvwgewIAE5BJiITZpd_ZQXWXYMcBw5NBowGRA&oe=6687C72A"
            alt="Foto de André Laurentino Rodrigues"
          />
          <AuthorDescription>
            <AuthorName>André Laurentino Rodrigues</AuthorName>
            <AuthorBio>
              Sou engenheiro de software na NTTData, apaixonado por tecnologia e
              inovação. Este blog é meu espaço para compartilhar conhecimento e
              insights adquiridos ao longo de minha carreira. Se você está
              interessado em explorar mais sobre tecnologia e suas aplicações
              práticas, visite o{" "}
              <AuthorLink href="https://seudominio.com">meu site</AuthorLink>{" "}
              para mais artigos e projetos.
            </AuthorBio>
          </AuthorDescription>
        </AuthorInfo>
      </Article>
    </Main>
  );
};

export default SobreNos;
