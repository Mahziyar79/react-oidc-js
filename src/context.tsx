import { User, UserManager } from "./userManager";
import { createContext } from "react";

export const Context = createContext<{
  userManager: UserManager;
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
  removeUser: () => Promise<void>;
  isLoaded: boolean;
}>({} as any);
