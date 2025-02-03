// context/AppContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  icone: string;
  setIcone: React.Dispatch<React.SetStateAction<string>>;
}

// Criando o contexto com valor padrão
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando o provedor do contexto
interface AppProviderProps {

  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const [icone, setIcone] = useState("/images/glass-oculos-preto-peq.webp")

  return (
    <AppContext.Provider value={{
      icone,
      setIcone,
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
