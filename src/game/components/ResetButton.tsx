import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { RootState } from "../state/reducers";

type Props = {
    setReloadBoard: any;
};

const ResetButton: React.FC<Props> = ({ setReloadBoard }) => {
    const [clicked, setClicked] = useState<boolean>(true);

    const dispatch = useDispatch();
    const { resetWord } = bindActionCreators(actionCreators, dispatch);
    const word = useSelector((state: RootState) => state.word, shallowEqual);

    const handleButton = (e: any) => {
        e.preventDefault();
        resetWord();
        setReloadBoard(true);
    };

    useEffect(() => {
        if(word !== "" && word !== undefined && word !== null) setClicked(false);
        else setClicked(true)
    }, [word]);

    return (
        <div className="col-12 d-flex flex-row justify-content-end align-items-center reset-button">
            <p>clear word</p>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" disabled={clicked} onClick={e => handleButton(e)} />
        </div>
    )
};

export default ResetButton;