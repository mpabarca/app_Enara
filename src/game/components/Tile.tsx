import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

type Props = {
    letter: string;
};

const Tile: React.FC<Props> = ({ letter }) => {
    const dispatch = useDispatch();

    const { addLetter } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="col-3">
            <button type="button" className="btn btn-warning" onClick={() => addLetter(letter)}>
                {letter}
            </button>
        </div>
    )
};

export default Tile;