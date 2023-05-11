import React from 'react';
import './App.css';
import { Board } from './components/board/Board';
import { ResetButton } from './components/reset-button/ResetButton';
import { ScoreBoard } from './components/score-board/ScoreBoard';
function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <Board />
      <ResetButton />
    </div>
  );
}

export default App;
