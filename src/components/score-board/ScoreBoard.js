import React from 'react'
import './ScoreBoard.css'
import { useSelector } from 'react-redux'

export const ScoreBoard = () => {

    const [isFirstPlayerTurn, firstPlayerScore, secondPlayerScore] = useSelector(state => [state.flipCard.isFirstPlayerTurn, state.flipCard.firstPlayerScore, state.flipCard.secondPlayerScore])
        
    return (
        <div className="score-board">
                <span className={`score one-score ${!isFirstPlayerTurn && "inactive"}`}>
                    Player #1
                    <span>Score: {firstPlayerScore}</span>
                </span>
                <span className={`score two-score ${isFirstPlayerTurn && "inactive"}`}>
                    Player #2
                    <span>Score: {secondPlayerScore}</span>
                </span>
        </div>
    )
}
