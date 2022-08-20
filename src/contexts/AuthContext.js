import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
    auth,
    registerWithEmailAndPassword,
    onAuthStateChanged,
} from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const signUp = (username, email, password) => {
        return registerWithEmailAndPassword(username, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    const value = {
        currentUser,
        signUp,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
