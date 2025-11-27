import React, {useContext, createContext, useState} from "react";
const userContext = createContext();

const authContext = ({children}) => {
    const [user, setUser] = useState(null);
    const login = (userData) => {
        setUser(userData);
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };
    return (
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
    );
};
export const useAth = () => useContext(useContext);
export default authContext; 