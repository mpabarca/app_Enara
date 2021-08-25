import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";

type Props = {
    validWord: boolean;
};

const WordBox: React.FC<Props> = ({ validWord }) => {
    const state = useSelector((state: RootState) => state.word);
    console.log("en wordbox - " + validWord);

    return (
        <div className="col-12 d-flex justify-content-between align-items-center word-box">
            {state}
            <p>{validWord ? "valid" : "invalid"}</p>
        </div>
    )
};

export default WordBox;