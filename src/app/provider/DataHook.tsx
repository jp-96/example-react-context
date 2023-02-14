import { CustomState, ActionType, useCustomReducer } from "./DataReducer";

const initialState: CustomState = {};

export type CustomHook = {
    state: CustomState,
    set: (key: string, value: string) => void,
    remove: (key: string) => void,
}

export const useCustomHook = ():CustomHook => {
    const [state, dispatch] = useCustomReducer(initialState);
    const set = (key: string, value: string) => {
        dispatch({
            type: ActionType.SET,
            payload: {
                key,
                value,
            },
        });
    };
    const remove = (key: string) => {
        dispatch({
            type: ActionType.REMOVE,
            payload: {
                key,
            },
        });
    };
    return {
        state,
        set,
        remove,
    };
}
