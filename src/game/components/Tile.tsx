import React from "react";

type Props = {
    letter: String;
};

const Tile: React.FC<Props> = ({ letter }) => {

    return (
        <div>
            {letter}
        </div>
    )
};

export default Tile;