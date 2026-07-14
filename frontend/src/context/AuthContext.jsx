import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();


export function AuthProvider({ children }) {


    const [user, setUser] = useState(null);

    const [token, setToken] = useState(null);



    useEffect(() => {


        const savedUser = localStorage.getItem("lara_user");

        const savedToken = localStorage.getItem("lara_token");



        if(savedUser){

            setUser(JSON.parse(savedUser));

        }



        if(savedToken){

            setToken(savedToken);

        }



    }, []);






    const login = (userData, userToken) => {



        console.log("AUTH CONTEXT LOGIN RUNNING");
        console.log("AUTH LOGIN USER:", userData);



        setUser(userData);

        setToken(userToken);



        localStorage.setItem(
            "lara_user",
            JSON.stringify(userData)
        );


        localStorage.setItem(
            "lara_token",
            userToken
        );



    };






    const logout = () => {



        setUser(null);

        setToken(null);



        localStorage.removeItem("lara_user");

        localStorage.removeItem("lara_token");



    };







    return (

        <AuthContext.Provider

            value={{
                user,
                token,
                login,
                logout
            }}

        >

            {children}

        </AuthContext.Provider>

    );



}