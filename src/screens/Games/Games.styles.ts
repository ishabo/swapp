import styled from 'styled-components';

const SCardFace = styled.div`
  height: 100%;
  width: 100%;
`;

export const SBackFace = styled(SCardFace)`
  background: url('images/starwars-logo.png') rgb(40, 44, 52) no-repeat center;
  background-size: 55%;
`;

export const SCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const SOrdinaryCard = styled(SCard)`
  background-color: red;
`;
export const SWinnerCard = styled(SCard)`
  background-color: green;
`;
