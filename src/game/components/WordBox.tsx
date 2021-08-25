import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "../state/reducers";
import dictionary from '../../files/dictionary.json';

type Props = {
    validWord: boolean;
    setValidWord: React.Dispatch<React.SetStateAction<any>>;
};

const WordBox: React.FC<Props> = ({ validWord, setValidWord }) => {
    const [clickedWord, setClickedWord] = useState<boolean>(false);

    const word = useSelector((state: RootState) => state.word, shallowEqual);

    useEffect(() => {
        setValidWord(dictionary.words.includes(word.toLowerCase()));

        if(word !== "" && word !== undefined && word !== null) setClickedWord(true);
        else setClickedWord(false);
      },[word, setValidWord]);

    return (
        <div className="col-12 d-flex justify-content-between align-items-center word-box">
            {validWord ? <h4 className="correct">{word}</h4> : <h4 className="wrong">{word}</h4>}
            {clickedWord ? <p>{validWord ? <p className="correct">valid</p> : <p className="wrong">invalid</p>}</p> : ""}
        </div>
    )
};

export default WordBox;