import React, { useEffect, useState } from 'react';
import { CardDeck } from '../../components/CardGame/CardDeck';
import { IProps } from './types';
import { ICompetitor } from '../../store/swapi/selectors';
import { TCardDeckComponent } from '../../components/CardGame/CardDeck/types';
import Layout from '../../components/Layout';
import { SOrdinaryCard, SWinnerCard, SBackFace } from './Games.styles';

const TypedCardDeck = CardDeck as TCardDeckComponent<ICompetitor>;

const Games = (props: IProps) => {
  useEffect(() => {
    if (!props.competitors.length) {
      props.fetchCompetitors();
    }
  }, []);

  const [selected, setSelected] = useState<ICompetitor[]>([]);
  const [winner, setWinner] = useState<ICompetitor>();

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].competition.value > selected[1].competition.value) {
        setWinner(selected[0]);
      } else if (
        selected[1].competition.value > selected[0].competition.value
      ) {
        setWinner(selected[1]);
      } else {
        // TODO: decide what to do when it's a draw
      }
    }
  }, [selected]);

  const renderFrontFace = () => <SBackFace />;

  const renderBackFace = (card: ICompetitor) => {
    const isWinner = winner && card.name === winner.name;
    const StyledCard = isWinner ? SWinnerCard : SOrdinaryCard;

    return (
      <StyledCard>
        <h2>{isWinner ? 'Winner!' : 'Looser!'}</h2>

        <div>{card.name}</div>
        <div>
          Has {card.competition.subject} of {card.competition.value}
        </div>
      </StyledCard>
    );
  };

  return (
    <Layout>
      {!props.isFetching && props.competitors.length ? (
        <TypedCardDeck
          replay={() => props.fetchCompetitors()}
          cards={props.competitors}
          setSelected={setSelected}
          renderBackFace={renderBackFace}
          renderFrontFace={renderFrontFace}
        ></TypedCardDeck>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Games;
