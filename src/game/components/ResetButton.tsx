import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

type Props = {
    setReloadBoard: any;
};

const ResetButton: React.FC<Props> = ({ setReloadBoard }) => {

    const dispatch = useDispatch();
    const { resetWord } = bindActionCreators(actionCreators, dispatch);

    const handleButton = (e: any) => {
        e.preventDefault();
        resetWord();
        setReloadBoard(true);
    };

    return (
        <div className="reset-button">
            <p>Clear word</p>
            <button type="button" className="btn-close" aria-label="Close" onClick={e => handleButton(e)} />
        </div>
    )
};

export default ResetButton;