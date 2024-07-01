import styled from "styled-components";

// Cores padrão das redes sociais
const twitterColor = "#1da1f2";
const facebookColor = "#1877f2";
const linkedinColor = "#2867B2";
const whatsappColor = "#04BF45";

export const PostWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 800px;
`;

export const PostTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const PostContent = styled.div`
  font-size: 1.2em;
  line-height: 1.6;

  p {
    margin-bottom: 30px; /* Adiciona espaço entre os parágrafos */
  }
`;

export const ShareButton = styled.button`
  background-color: ${(props) => {
    switch (props.network) {
      case "twitter":
        return twitterColor;
      case "facebook":
        return facebookColor;
      case "linkedin":
        return linkedinColor;
      case "whatsapp":
        return whatsappColor;
      default:
        return "#007bff";
    }
  }};
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${(props) => {
      switch (props.network) {
        case "twitter":
          return "#1a91da";
        case "facebook":
          return "#1153a5";
        case "linkedin":
          return "#1d4a7e";
        case "whatsapp":
          return "#03A63C";
        default:
          return "#03A63C";
      }
    }};
  }
`;
