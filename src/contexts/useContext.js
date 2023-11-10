import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [nomeDoUsuario, setNomeDoUsuario] = useState('');

  return (
    <UsuarioContext.Provider value={{ nomeDoUsuario, setNomeDoUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  return useContext(UsuarioContext);
}
