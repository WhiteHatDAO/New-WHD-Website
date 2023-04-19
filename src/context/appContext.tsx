import React, { createContext, useState, useContext } from "react";

interface appState {
  provider? : any,
  web3Provider?: any,
  address?: string,
  auditProjects?: any[],
  openApplyModal?: boolean
  days?: number;
  token?: string;
}

const defaultState: appState = {
  provider: null,
  web3Provider: null,
  address: '',
  auditProjects: [],
  openApplyModal: false,
  days: 1,
  token: "bitcoin"
}

type ContextType<TValue> = [TValue, (newValue: TValue) => void];

const defaultContextValue: ContextType<appState> = [defaultState, () => {}];

export const AppContext = createContext(defaultContextValue);

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children, ...props }) => {
  const [contextState, setContextState] = useState<appState>(defaultState);

  const ctxValue: ContextType<appState> = [
    contextState,
    (value: appState) => {
      setContextState(value);
    },
  ];

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
