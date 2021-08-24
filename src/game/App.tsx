import React, { useEffect, useState } from 'react';
import boardJson from '../files/test-board-2.json';
import Board from './components/Board';

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
    </div>
  );
}

export default App;
