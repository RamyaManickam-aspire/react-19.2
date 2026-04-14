import { useState } from "react";
import { UserContext } from "./userContext";
type Props = {
  children?: React.ReactNode;
};
export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState("Ramya");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
