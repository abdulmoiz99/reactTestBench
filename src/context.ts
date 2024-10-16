import { createContext, useContext } from "react";

interface UserContextType {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
  }

export const UserContext = createContext<undefined | UserContextType>(undefined);

export function useUserContext(){
    const user = useContext(UserContext);
    if(user === undefined) {
        throw new Error('use user context must be used in the DashBoard Context')
    }
    return user;
}