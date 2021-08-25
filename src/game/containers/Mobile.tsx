import React from 'react';
import Board from '../components/Board';
import ResetButton from '../components/ResetButton';
import WordBox from '../components/WordBox';

type Props = {
    board: string[];
    validWord: boolean;
    setValidWord: React.Dispatch<React.SetStateAction<any>>;
    reloadBoard: boolean;
    setReloadBoard: React.Dispatch<React.SetStateAction<any>>;
};

const Mobile: React.FC<Props> = (Props) => {
    const { board, reloadBoard, setReloadBoard, validWord, setValidWord } = Props;

    return (
        <div className="app-mobile d-flex flex-column flex-wrap justify-content-center align-items-center">
            <ResetButton setReloadBoard = {setReloadBoard}/>
            <Board board = {board} validWord={validWord} reloadBoard={reloadBoard} /> 
            <WordBox validWord={validWord} setValidWord={setValidWord} />
        </div>
    )
};

export default Mobile;
