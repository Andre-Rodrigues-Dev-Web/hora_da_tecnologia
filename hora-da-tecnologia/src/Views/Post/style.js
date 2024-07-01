import styled from "styled-components";

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
    margin-bottom: 30px;
  }
`;
