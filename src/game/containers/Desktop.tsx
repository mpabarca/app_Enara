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

const Desktop: React.FC<Props> = (Props) => {
    const { board, reloadBoard, setReloadBoard, validWord, setValidWord } = Props;

    return (
        <div className="app-desktop d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Board board = {board} validWord={validWord} reloadBoard={reloadBoard} /> 
            <div className="d-flex flex-column justify-content-between desktop info-board">
                <ResetButton setReloadBoard = {setReloadBoard}/>
                <WordBox validWord={validWord} setValidWord={setValidWord} />
            </div>
        </div>
    )
};

export default Desktop;
