import { createContext, useContext, useState } from "react";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextData {
  isAuthenticated: boolean;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [user, setUser] = useState(null);
  // const isAuthenticated = !!user;
  const isAuthenticated = true;

  async function signIn() { 
    //const {data} = api.post('/auth.....', {
    //   username,
    //   password,
    // })

    // setUser(data.user);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
