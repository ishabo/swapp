import styled, { keyframes } from 'styled-components';

const moveTwinkBack = () => keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
`;

const SLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export const SStar = styled(SLayer)`
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png)
    repeat top center;
  z-index: 0;
`;

export const STwinkling = styled(SLayer)`
  background: url(http://www.script-tutorials.com/demos/360/images/twinkling.png)
    repeat top center;
  z-index: 1;

  animation: ${moveTwinkBack} 200s linear infinite;
`;

export const SApp = styled.div`
  display: flex;
  position: relative;
  background-color: #000;
  flex-direction: column;
  min-height: 100vh;
`;

export const SMain = styled.main`
  z-index: 10;
  padding-top: 110px;

  display: flex;
  width: 100%;
  justify-content: center;
`;

export const SAppHeader = styled.header`
  z-index: 10;
  background-image: url('images/starwars-logo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32vh;
  min-height: 20vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
