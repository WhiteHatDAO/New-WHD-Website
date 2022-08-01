import React, { createContext, useState, useContext } from "react";

interface WalletState {
  provider? : any,
  web3Provider?: any,
  address?: string
}

const defaultState: WalletState = {
  provider: null,
  web3Provider: null,
  address: ''
}

type ContextType<TValue> = [TValue, (newValue: TValue) => void];

const defaultContextValue: ContextType<WalletState> = [defaultState, () => {}];

export const AppContext = createContext(defaultContextValue);

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children, ...props }) => {
  const [contextState, setContextState] = useState<WalletState>(defaultState);

  const ctxValue: ContextType<WalletState> = [
    contextState,
    (value: WalletState) => {
      setContextState(value);
    },
  ];

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
