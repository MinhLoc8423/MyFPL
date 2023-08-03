import React, {createContext, useState} from 'react';
import {login} from '../services/UserService';

export const UserContext = createContext();

export const UserProvider = props => {
  const {children} = props;
  const [user, setUser] = useState(null);

  const onLogin = async (username, password) => {
    try {
      const result = await login(username, password);
      if (result.statusCode == 200) {
        console.log(result.data.fullName)
        setUser(result.data.fullName)
        return true;
      }
    } catch (error) {
      console.log('login err: ', error);
    }
    return false;
  };

  return (
    <UserContext.Provider value={{user, setUser, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};
