import React from "react";

type Props = {
    letter: String;
};

const Tile: React.FC<Props> = ({ letter }) => {

    return (
        <div className="col-3">
            {letter}
        </div>
    )
};

export default Tile;