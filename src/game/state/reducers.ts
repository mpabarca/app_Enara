import { Action } from "./actions";

const initialState = "";

export const reducer = (state: string = initialState, action: Action): string => {
    switch (action.type){
        case "ADD_LETTER": 
            return state + action.payload;
        case "RESET_WORD": 
            return initialState;
        default:
            return state;
    }
};