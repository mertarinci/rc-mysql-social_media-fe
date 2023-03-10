import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (input) => {

        const res = await axios.post("http://localhost:8080/api/auth/login", input, {
            withCredentials: true,
        });

        setCurrentUser(res.data)
    };

    const logout = async () => {

        await axios.post("http://localhost:8080/api/auth/logout", {
            withCredentials: true
        });
        setCurrentUser(null)
        window.location.reload()
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    )

}