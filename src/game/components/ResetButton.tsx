import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const ResetButton = () => {
    const dispatch = useDispatch();
    const { resetWord } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <p>Clear word</p>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => resetWord()} />
        </div>
    )
};

export default ResetButton;