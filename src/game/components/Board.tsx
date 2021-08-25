import React from "react";
import Tile from "./Tile";

type Props = {
    board: string[];
    validWord: boolean;
    reloadBoard: boolean;
};

const Board: React.FC<Props> = ({ board, validWord, reloadBoard }) => {
    
    return (
        <div className="d-flex flex-row flex-wrap board">
            {board.map(letter => (
                <Tile letter={letter} validWord={validWord} reloadBoard={reloadBoard} />
            ))}
        </div>
    )
};

export default Board;