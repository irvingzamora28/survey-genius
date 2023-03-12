import React, { createContext, useContext, useState } from "react";

interface UserInterface {
    name: string;
    email: string;
    imageUrl: string;
}

interface StateContextData {
    currentUser: UserInterface;
    userToken: string | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface>>;
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const StateContext = createContext<StateContextData>({
    currentUser: {
        name: "",
        email: "",
        imageUrl: "",
    },
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

interface Props {
    children?: React.ReactNode[] | React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
    const user = {
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl: "https://picsum.photos/200",
    };
    const [currentUser, setCurrentUser] = useState<UserInterface>(user);
    const [userToken, setUserToken] = useState<string | null>(null);

    return (
        <StateContext.Provider
            value={{ currentUser, setCurrentUser, userToken, setUserToken }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const userStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error("userStateContext must be used within a UserProvider");
    }
    return context;
};
