import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "./state/reducers";
import boardJson from '../files/test-board-2.json';
import dictionary from '../files/dictionary.json';
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import WordBox from './components/WordBox';

const App: React.FC = () => {
  const state = useSelector((state: RootState) => state.word);

  const [board, setBoard] = useState<string[]>([]);
  const [reloadBoard, setReloadBoard] = useState<boolean>(false);
  const [validWord, setValidWord] = useState<boolean>(false);

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

  useEffect(() => {
    setValidWord(dictionary.words.includes(state));
  },[state]);

  return (
    <div className="App d-flex flex-row flex-wrap justify-content-center align-items-center">
      <Board board = {board} /> 
      <div className="d-flex flex-column justify-content-between desktop info-board">
        <ResetButton setReloadBoard = {setReloadBoard}/>
        <WordBox validWord = {validWord} />
      </div>
    </div>
  );
}

export default App;
