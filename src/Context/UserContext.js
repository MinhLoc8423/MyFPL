import React, {createContext, useState} from 'react';
import {login} from '../services/UserService';

export const UserContext = createContext();

export const UserProvider = props => {
  const {children} = props;
  const [user, setUser] = useState(null);
  const [arr, setArr] = useState([]);

  const onLogin = async (username, password) => {
    try {
      const result = await login(username, password);
      if (result.statusCode == 200) {
        setUser(result.data.fullName)
        setArr(result.data)
        return true;
      }
    } catch (error) {
      console.log('login err: ', error);
    }
    return false;
  };

  return (
    <UserContext.Provider value={{user, setUser, arr, setArr, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};
