// CardStyles.js

import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  a {
    background-color: #056cf2;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    padding: 7px 20px;
  }
  @media (min-width: 768px) {
    width: 312px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 8px 0;
`;

export const CardImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
`;

export const CardCategoria = styled.small`
  font-size: 1em;
  margin: 0 0 16px 0;
`;

export const CardDescription = styled.p`
  font-size: 1em;
  margin: 0 0 16px 0;
`;
