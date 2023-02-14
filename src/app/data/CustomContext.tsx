import React, { createContext, ReactNode, useContext } from "react";
import { State, Types, useActions } from "./CustomReducer";

type Value = {
    state: State,
    set: (key: string, value: string) => void,
    remove: (key: string) => void,
}

const useValue = (initialState?: State): Value => {
    const [state, dispatch] = useActions(initialState);
    const set = (key: string, value: string) => {
        dispatch({
            type: Types.SET,
            payload: {
                key,
                value,
            },
        });
    };
    const remove = (key: string) => {
        dispatch({
            type: Types.REMOVE,
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

type Props = {
    initialState?: State;
    children?: ReactNode;
}

const Context = createContext<Value>(
    undefined!
    // If you thought this should be optional, see
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
); 

export const useContextConsumer = () => useContext(Context);
export default function ContextProvider({ initialState, children }: Props) {
    const value = useValue(initialState)
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}
