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
  apiHosterIP: string;
  updateApiHosterIPConfig: (ip: string) => void;
  isAuthenticated: boolean;
  user: UserProps | undefined;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [apiHosterIP, setApiHosterIP] = useState<string>('');

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

  function updateApiHosterIPConfig(ip: string) {
    setApiHosterIP(ip)
  }

  return (
    <AuthenticationContext.Provider
      value={{
        apiHosterIP,
        updateApiHosterIPConfig,
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
