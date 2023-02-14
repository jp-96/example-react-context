import React, { createContext, useContext } from "react";
import { CustomHook, useCustomHook } from "./CustomHook";
import { CustomState } from "./CustomReducer";

type Props = {
    initialState?: CustomState
    children: any;
}

const CustomContext = createContext<CustomHook>(
    undefined!
    // If you thought this should be optional, see
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
); 

export const useData = () => useContext(CustomContext);
export default function CustomContextProvider({ initialState, children }: Props) {
    const customHook = useCustomHook(initialState)
    return (
        <CustomContext.Provider value={customHook}>
            {children}
        </CustomContext.Provider>
    );
}
