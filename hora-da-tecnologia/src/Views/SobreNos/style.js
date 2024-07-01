import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
`;

export const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const MetaText = styled.span`
  margin-left: 10px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 40px;
`;

export const AuthorAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const AuthorDescription = styled.div`
  flex: 1;
`;

export const AuthorName = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const AuthorBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const AuthorLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
