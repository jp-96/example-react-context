import { useImmerReducer } from "use-immer";    // yarn add --dev use-immer

export enum Types {
    SET = "SET",
    REMOVE = "REMOVE"
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

type Actions = SetAction | RemoveAction;

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
        default:
            break;
    }
};

export const useActions = (initialState?: State) => useImmerReducer(reducer, initialState ?? defaultState);
