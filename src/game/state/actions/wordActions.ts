import { ActionType } from "../action-types/index";

interface AddAction {
    type: ActionType.ADD_LETTER,
    payload: string
}

interface ResetAction {
    type: ActionType.RESET_WORD
}

export type Action = AddAction | ResetAction;