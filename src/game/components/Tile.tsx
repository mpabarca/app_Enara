import React from "react";

type Props = {
    letter: String;
};

const Tile: React.FC<Props> = ({ letter }) => {

    return (
        <div className="col-3">
            <button type="button" className="btn btn-warning">
                {letter}
            </button>
        </div>
    )
};

export default Tile;