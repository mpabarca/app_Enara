import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";

const WordBox = () => {
    const state = useSelector((state: RootState) => state.word);

    return (
        <div className="col-12 d-flex justify-content-start align-items-center word-box">
            {state}
        </div>
    )
};

export default WordBox;