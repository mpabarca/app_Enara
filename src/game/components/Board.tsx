import React from "react";
import Tile from "./Tile";

type Props = {
    board: string[];
};

const Board: React.FC<Props> = ({ board }) => {
    
    return (
        <div className="d-flex flex-row flex-wrap">
            {board.map(letter => (
                <Tile letter = {letter} />
            ))}
        </div>
    )
};

export default Board;