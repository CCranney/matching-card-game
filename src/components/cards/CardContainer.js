import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import './CardContainer.css'
import { Card } from './Card'
import { CSSTransition } from 'react-transition-group'
import { flipCard } from '../../store/slices/FlipCardSlice'

export const CardContainer = ({cardIdx, imgIdx}) => {
    const isShowingFront = useSelector(state => state.flipCard.boardFlippedStates[cardIdx]);
    const dispatch = useDispatch();

    return (
        <div className='card-container'>
            <CSSTransition
                in={isShowingFront}
                timeout={3000}
                classNames='flip'
            >
                <Card imgIdx={imgIdx} onClick={() => {
                    dispatch(flipCard(cardIdx))
                }} />
            </CSSTransition>
        </div>
    )
}
