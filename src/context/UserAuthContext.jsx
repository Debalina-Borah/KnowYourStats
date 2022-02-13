import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.utils";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setuser] = useState("")
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setuser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <userAuthContext.Provider value={{ user, signup, login }}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}