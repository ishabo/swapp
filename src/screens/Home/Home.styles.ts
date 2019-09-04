import styled from 'styled-components';

export const SMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SGames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }

  img {
    height: 200px;
    width: 350px;
  }
`;

export const STitle = styled.h2`
  text-align: center;
  align-self: center;
  font-family: 'Pathway Gothic One', sans-serif;
`;
