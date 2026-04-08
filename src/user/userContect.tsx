import { createContext, useState } from "react";
export const UserContext = createContext<any>("");
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState("Ramya");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
