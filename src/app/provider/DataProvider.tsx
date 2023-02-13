import React, { createContext, useContext, useState, useEffect } from "react";
import { useImmerReducer } from "use-immer";    // yarn add --dev immer use-immer

type DataType = {};

const initialData:DataType = {};

const ACTION_TYPE_SET = 'SET';
const ACTION_TYPE_REMOVE = 'REMOVE';

type Action = {
    type: 'SET' | 'REMOVE';
    data?: {key:string; value:string;};
    key?: string;
}

const reducer = (draft: DataType, action: Action) => {
    switch (action.type) {
        case ACTION_TYPE_SET:
            if (action.data) {
                draft[action.data.key] = action.data.value;
            };
            break;
        case ACTION_TYPE_REMOVE:
            if (action.key) {
                delete draft[action.key];
            };
            break;
        default:
            break;
    }
};

type DataContextType = {
    data: DataType,
    set: (key: string, value: string) => void,
    remove: (key: string) => void,
}

const useDataContext = () => {
    const [data, dispatch] = useImmerReducer(reducer, initialData);
    const set = (key: string, value: string) => {
        dispatch({
            type: ACTION_TYPE_SET,
            data: {key, value,},
        });
    };
    const remove = (key: string) => {
        dispatch({
            type: ACTION_TYPE_REMOVE,
            key,
        });
    };
    const providerValue: DataContextType ={
        data,
        set,
        remove,
    };
    return providerValue;
}

const defaultValue: DataContextType = {
    data: initialData,
    set: (key: string, value: string) => undefined,
    remove: (key: string) => undefined,
}

const DataContext = createContext(defaultValue);

export const useData = () => useContext(DataContext);

export default function DataProvider({ children }) {
    const providerValue = useDataContext()
    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    );
}
