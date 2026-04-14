import { createContext } from "react";
type UserContextType = {
  user: string;
  setUser: (value: string) => void;
};
export const UserContext = createContext<UserContextType>({
  user: "",
  setUser: () => {},
});
