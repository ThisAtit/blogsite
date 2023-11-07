import { createContext, useContext, useState } from "react";
import { baseUrl } from "./BlogProvider";

const UserContext = createContext();

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

const userLogin = async (loginInfo) => {
    const result = await fetch(`${baseUrl}/user`, {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(loginInfo)
    });

    return await result.json();
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : undefined;
    });

    const handleLogin = async (loginInfo) => {
        const result = await userLogin(loginInfo);
        setUser(result);

        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));
        return true;
    }

    const handleLogout = () => {
        setUser(undefined)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }


    return (
        <UserContext.Provider value={{user, handleLogin, handleLogout}}>
            {children}
        </UserContext.Provider>
    )
}