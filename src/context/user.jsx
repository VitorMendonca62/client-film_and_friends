import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { showUser } from '../services/api';

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ auth: false, username: 'Visitante' });

  useEffect(() => {
    if (Cookies.get('USER_TOKEN')) {
      const id = Cookies.get('USER_ID');
      const data = showUser(id);
      data.then((e) => setUser({ ...e.user, auth: true }));
    }
  }, []);

  const handleUpdateUser = (newUser) => {
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser({ auth: false, username: 'Visitante' });
    Cookies.remove('USER_TOKEN');
    Cookies.remove('USER_ID');
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser: handleUpdateUser, logoutUser: handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
