import styled, { keyframes } from 'styled-components';

interface ITransitionProps {
  startPosition: number;
  hasShuffled?: boolean;
  selected?: boolean;
  side: 'left' | 'right';
  elementWidth: number;
}

const fiftyFifty = () => Math.random() < 0.5;

export const shuffleAnimation = ({ elementWidth = 100 }: ITransitionProps) => {
  const chance = fiftyFifty();
  const hEnd = chance ? elementWidth : -elementWidth;

  const randomNum = () => Math.floor(Math.random() * 10);

  return keyframes`
    0% { transform: translate(0, 0); z-index: ${randomNum()} }
    50% { transform: translate(${hEnd / 1.8}px, 0); z-index: ${randomNum()}  }
    100% { transform: translate(0, 0); z-index: ${randomNum()} }
  `;
};

export const selectAnimation = ({
  side,
  selected,
  elementWidth
}: ITransitionProps) => {
  if (!selected) return;
  const tx = side === 'right' ? elementWidth : -elementWidth;

  return keyframes`
    0% {
      transform: rotate(0) translateX(0);
    }

    100% {
      transform: translate(${tx / 1.5}px, 200px) rotateY(180deg);
    }
  `;
};

export const SCard = styled.div`
  display: flex;
  border: 1px solid gray;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform-style: preserve-3d;
  left: ${({ startPosition }: ITransitionProps) => startPosition}em;
  top: ${({ startPosition }: ITransitionProps) => startPosition}em;

  animation: ${shuffleAnimation} 0.8s 2, ${selectAnimation} 0.5s 2.1s forwards;
  animation-direction: alternate;
`;

export const SCardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const SCardFrontFace = styled(SCardFace)``;

export const SCardBackFace = styled(SCardFace)`
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  transform: rotateY(-180deg);
`;
