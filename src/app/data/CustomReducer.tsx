import { useImmerReducer } from "use-immer";    // yarn add --dev use-immer

export enum Types {
    SET = "SET",
    REMOVE = "REMOVE",
    ADD = "ADD",
};

type SetAction = {
    type: Types.SET;
    payload: {
        key:string;
        value:string;
    };
}

type RemoveAction = {
    type: Types.REMOVE;
    payload: {
        key: string;
    }
}

type AddAction = {
    type: Types.ADD;
    payload: {
        key:string;
        char:string;
    };
}

type Actions = SetAction | RemoveAction | AddAction;

export type State = {
    data: Object;
};

const defaultState: State = {
    data: {},
};

const reducer = (draft: State, action: Actions) => {
    switch (action.type) {
        case Types.SET:
            draft.data[action.payload.key] = action.payload.value;
            break;
        case Types.REMOVE:
            delete draft.data[action.payload.key];
            break;
        case Types.ADD:
            draft.data[action.payload.key] = (draft.data[action.payload.key] ?? "") + action.payload.char;
            break;
        default:
            break;
    }
};

export const useActions = (initialState?: State) => useImmerReducer(reducer, initialState ?? defaultState);
