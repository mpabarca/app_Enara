import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/wordActions";

export const addLetter = (letter: string) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_LETTER,
            payload: letter
        })
    }
};

export const resetWord = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET_WORD
        })
    }
};