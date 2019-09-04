import React from 'react';
import { SCard, SCardFrontFace, SCardBackFace } from './Card.style';

export interface IProps {
  startPosition?: number;
  hasShuffled?: boolean;
  selected: boolean;
  elementWidth: number;
  index: number;
  renderBackFace: JSX.Element;
  renderFrontFace: JSX.Element;
}

const Card = ({
  hasShuffled,
  selected,
  startPosition = 0.0,
  elementWidth,
  renderBackFace,
  renderFrontFace,
  index
}: IProps) => (
  <SCard
    side={index % 2 === 0 ? 'right' : 'left'}
    elementWidth={elementWidth}
    startPosition={startPosition}
    hasShuffled={hasShuffled}
    selected={selected}
  >
    <SCardFrontFace>{renderFrontFace}</SCardFrontFace>
    <SCardBackFace>{renderBackFace}</SCardBackFace>
  </SCard>
);

export default Card;
