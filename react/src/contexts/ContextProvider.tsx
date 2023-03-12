import React, { createContext, useContext, useState } from "react";

interface StateContextData {
    currentUser: object | null;
    userToken: string | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<object | null>>;
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const StateContext = createContext<StateContextData>({
    currentUser: null,
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

interface Props {
    children?: React.ReactNode[] | React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<object | null>(null);
    const [userToken, setUserToken] = useState<string | null>(null);

    return (
        <StateContext.Provider
            value={{ currentUser, setCurrentUser, userToken, setUserToken }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const userStateContext: StateContextData = useContext(StateContext);
