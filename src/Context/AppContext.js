import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = props => {
  const {children} = props;
  const [news, setNews] = useState([]);
  return (
    <AppContext.Provider value={{news, setNews}}>
      {children}
    </AppContext.Provider>
  );
};
