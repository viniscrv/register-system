import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(username: string, password: string) {
    const response = await LoginRequest(username, password);

    const payload = { token: response.token, username };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
