interface AddAction {
    type: "ADD_LETTER",
    payload: string
};

interface ResetAction {
    type: "RESET_WORD",
    payload: string
};

export type Action = AddAction | ResetAction;