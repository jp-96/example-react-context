import { useImmerReducer } from "use-immer";    // yarn add --dev use-immer

export type CustomState = Object;

export enum ActionType {
    SET = "SET",
    REMOVE = "REMOVE"
};

type BaseAction = {
    type: ActionType;
    payload: {};
};

type SetAction = BaseAction & {
    type: ActionType.SET;
    payload: {
        key:string;
        value:string;
    };
}

type RemoveAction = BaseAction & {
    type: ActionType.REMOVE;
    payload: {
        key: string;
    }
}

type CustomAction = SetAction | RemoveAction;

const reducer = (draft: CustomState, action: CustomAction) => {
    switch (action.type) {
        case ActionType.SET:
            draft[action.payload.key] = action.payload.value;
            break;
        case ActionType.REMOVE:
            delete draft[action.payload.key];
            break;
        default:
            break;
    }
};

export const useCustomReducer = (initialState: CustomState) => useImmerReducer(reducer, initialState);
