import React from 'react'
import { useDispatch } from 'react-redux'

import "./ResetButton.css"
import { resetBoard } from '../../store/slices/FlipCardSlice'

export const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="reset-btn" onClick={() => dispatch(resetBoard())}>Reset Board</button>
  )
}
