import React, { useEffect, useState } from 'react';
import boardJson from '../files/test-board-2.json';

const App = () => {
  const [board, setBoard] = useState<String[]>([]);

  const getBoard = () => {
    return boardJson.board.sort(() => { return Math.random() - 0.5 });
  };

  useEffect(() => {
    setBoard(getBoard());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        App
      </header>
    </div>
  );
}

export default App;
