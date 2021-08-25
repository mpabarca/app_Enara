import React, { useEffect, useState } from 'react';
import boardJson from '../files/test-board-2.json';
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import WordBox from './components/WordBox';

const App: React.FC = () => {
  const [board, setBoard] = useState<string[]>([]);
  const [reloadBoard, setReloadBoard] = useState<boolean>(false);

  const getBoard = () => {
    return boardJson.board.sort(() => { return Math.random() - 0.5 });
  };

  useEffect(() => {
    setBoard(getBoard());
  }, []);

  useEffect(() => {
    if(reloadBoard) { 
      setBoard(getBoard());
      setReloadBoard(false);
    }
  }, [reloadBoard]);

  return (
    <div className="App d-flex flex-row flex-wrap justify-content-center align-self-center">
      <Board board = {board} /> 
      <div className="d-flex flex-column justify-content-between info-board">
        <ResetButton setReloadBoard = {setReloadBoard}/>
        <WordBox />
      </div>
    </div>
  );
}

export default App;
