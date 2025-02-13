// context/AppContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  iconeAtual: string;
  iconeTemporario: string;
  setIconeTemporario: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (newIcon: string) => void;
}

// Criando o contexto com valor padrão
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando o provedor do contexto
interface AppProviderProps {

  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const [iconeAtual, setIconeAtual] = useState("/images/glass-oculos-preto-peq.webp") // Icone inicial 
  const [iconeTemporario, setIconeTemporario] = useState(iconeAtual) // Altera entre os icones

  const handleClick = (newIcon: string) => {
    setIconeAtual(newIcon)
    setIconeTemporario(newIcon)
  }

  return (
    <AppContext.Provider value={{
      iconeAtual,
      iconeTemporario,
      setIconeTemporario,
      handleClick,
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Criando o hook para consumir o contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
