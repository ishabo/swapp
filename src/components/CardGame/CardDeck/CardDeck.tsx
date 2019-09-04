import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../Card';
import { TCardDeckComponent } from './types';
import { SDeck } from './CardDeck.style';
import { shuffleArray } from '../../../utils';

const CardDeck: TCardDeckComponent = props => {
  const divElement = useRef<any>(null);
  const [elementWidth, setElementWidth] = useState(100);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    if (divElement) {
      setElementWidth(divElement.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (props.cards.length) {
      const shuffledCards = shuffleArray(props.cards);
      setCards(shuffledCards);
      props.setSelected(shuffledCards.slice(-2));
    }
  }, [props.cards]);

  return (
    <SDeck ref={divElement}>
      <a onClick={() => props.replay()}>
        {cards.map((card, index) => (
          <Card
            key={index}
            elementWidth={elementWidth}
            index={index}
            selected={index >= cards.length - 2}
            startPosition={-index / 10}
            renderBackFace={props.renderBackFace(card)}
            renderFrontFace={props.renderFrontFace()}
          ></Card>
        ))}
      </a>
    </SDeck>
  );
};

export default CardDeck;
