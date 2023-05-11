import React from 'react'
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './Board.css'
import './fade-transition.css'
import { CardContainer } from '../cards/CardContainer';

export const Board = () => {
    const board = useSelector(state => state.flipCard.boardCards);
    const boardVisibilityStates = useSelector(state => state.flipCard.boardVisibilityStates);
    const cardComps = board.map((imgIdx, cardIdx) => {
      return (
        <CSSTransition 
          key={cardIdx}
          in={boardVisibilityStates[cardIdx]}
          appear={true}
          timeout={200}
          classNames="fade">
            <CardContainer imgIdx={imgIdx} cardIdx={cardIdx} />
          </CSSTransition>
      );
    })
  return (
    <div className='board'>
        {cardComps}
    </div>
  )
}
