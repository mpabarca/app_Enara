import React, { useEffect, useState } from 'react';
import boardJson from '../files/test-board-2.json';
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import WordBox from './components/WordBox';

const App: React.FC = () => {
  const [board, setBoard] = useState<string[]>([]);

  const getBoard = () => {
    return boardJson.board.sort(() => { return Math.random() - 0.5 });
  };

  useEffect(() => {
    setBoard(getBoard());
  }, []);

  return (
    <div className="App">
      <Board board = {board} /> 
      <WordBox />
      <ResetButton />
    </div>
  );
}

export default App;
