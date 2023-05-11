import React from 'react'
import './Card.css'
import './flip-transition.css'
import IMAGES from '../../constants/IMAGES'

export const Card = ({onClick, imgIdx}) => {
    return (
        <div className='card' onClick={onClick}>
            <div className='card-front'>Matching Game</div>
            <div className='card-back' style={{
                backgroundImage: `${IMAGES[imgIdx]}`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} ></div>
        </div>
    )
}
