import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? null
  );
  const [val, setVal] = useState(0);
  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        values: val,
        setValues: setVal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
