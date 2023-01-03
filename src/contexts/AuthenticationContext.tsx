import { createContext, useContext, useState } from "react";

interface UserProps {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  login: string;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextData {
  isAuthenticated: boolean;
  user: UserProps | undefined;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [user, setUser] = useState<UserProps>();
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
        user
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
