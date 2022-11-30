import { createContext, useContext } from "react";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextData {
  isAuthenticated: boolean;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: true,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
