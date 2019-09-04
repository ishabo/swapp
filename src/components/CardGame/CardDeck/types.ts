export interface IProps<C> {
  cards: C[];
  setSelected: (selected: C[]) => void;
  renderBackFace: (card: C) => JSX.Element;
  renderFrontFace: () => JSX.Element;
  replay: () => void;
}

export type TCardDeckComponent<T = any> = React.FC<IProps<T>>;
