import { useImmerReducer } from "use-immer";    // yarn add --dev use-immer

export enum Types {
    SET = "SET",
    REMOVE = "REMOVE"
};

type BaseAction = {
    type: Types;
    payload: {};
};

type SetAction = BaseAction & {
    type: Types.SET;
    payload: {
        key:string;
        value:string;
    };
}

type RemoveAction = BaseAction & {
    type: Types.REMOVE;
    payload: {
        key: string;
    }
}

type Actions = SetAction | RemoveAction;

export type State = Object;

const reducer = (draft: State, action: Actions) => {
    switch (action.type) {
        case Types.SET:
            draft[action.payload.key] = action.payload.value;
            break;
        case Types.REMOVE:
            delete draft[action.payload.key];
            break;
        default:
            break;
    }
};

const defaultState: State = {};

export const useActions = (initialState?: State) => useImmerReducer(reducer, initialState ?? defaultState);
