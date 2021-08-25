import React, { useEffect, useState } from 'react';
import boardJson from '../files/test-board-2.json';
import Desktop from './containers/Desktop';
import Mobile from './containers/Mobile';
import useViewport from './util';

const App: React.FC = () => {
  const [board, setBoard] = useState<string[]>([]);
  const [reloadBoard, setReloadBoard] = useState<boolean>(false);
  const [validWord, setValidWord] = useState<boolean>(false);

  const { width } = useViewport();
  const breakpoint = 768;

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
    <div className="App">
      {width < breakpoint ? (
        <Desktop 
          board = {board} 
          validWord={validWord} 
          setValidWord={setValidWord} 
          reloadBoard={reloadBoard}
          setReloadBoard={setReloadBoard} 
        />
      ) : (
        <Mobile 
          board = {board} 
          validWord={validWord} 
          setValidWord={setValidWord} 
          reloadBoard={reloadBoard}
          setReloadBoard={setReloadBoard} 
        />
      )}
    </div>
    
    
  )
};

export default App;
