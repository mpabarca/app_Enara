import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

type Props = {
    letter: string;
    validWord: boolean;
    reloadBoard: boolean;
};

const Tile: React.FC<Props> = ({ letter, validWord, reloadBoard }) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const dispatch = useDispatch();

    const { addLetter } = bindActionCreators(actionCreators, dispatch);

    const addClassClicked = () => {
        return `btn btn-warning ${validWord ? " correct" : " wrong"}`
    };

    const handleClick = (e: any) => {
        e.preventDefault();
        addLetter(letter);
        addClassClicked();
        setClicked(true);
    };

    useEffect(() => {
        if(reloadBoard) setClicked(false);
    }, [reloadBoard]);

    return (
        <div className="d-flex justify-content-center align-self-center col-3 tile">
            <button type="button" className={clicked ? addClassClicked() : "btn btn-warning "} onClick={e => handleClick(e)} disabled={clicked}>
                {letter}
            </button>
        </div>
    )
};

export default Tile;