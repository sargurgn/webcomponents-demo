import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState('Unavialable');

  const stopApp = () => {
    setAppState('Stopped')
  }

  const startApp = () => {
    setAppState('Started')
  }

  return (
    <AppContext.Provider value={{ appState, startApp, stopApp }}>
      {children}
    </AppContext.Provider>
  );
}
