import { Action } from "../actions/wordActions";
import { ActionType } from "../action-types";

const initialState = "";

const reducer = (state: string = initialState, action: Action): string => {
    switch (action.type){
        case ActionType.ADD_LETTER: 
            return state + action.payload;
        case ActionType.RESET_WORD: 
            return initialState;
        default:
            return state;
    }
};

export default reducer;