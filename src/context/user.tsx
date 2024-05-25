import { ReactNode, createContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface IPropsUserContenxt {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext | null>(null);

export default function UserProvider(props: IPropsUserContenxt) {
  const [user, setUser] = useState<IUserDataContext>({
    auth: false,
    username: 'Visitante',
    isLogged: false,
    token: null,
  });

  useEffect(() => {
    const verifyToken = async () => {
      const token = Cookies.get('USER_TOKEN')?.split(' ')[1];
      if (token) {
        const tokenDecoded = jwtDecode(token) as JwtPayload;
        const { username } = tokenDecoded;
        setUser({ auth: true, username, isLogged: true, token });
      }
    };
    verifyToken();
  }, []);

  const handleUpdateUser = (newUser: IUserDataContext) => {
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser({
      auth: false,
      username: 'Visitante',
      isLogged: false,
      token: null,
    });
    Cookies.remove('USER_TOKEN');
  };

  if (props) {
    const { children } = props;

    return (
      <UserContext.Provider
        value={{ user, updateUser: handleUpdateUser, logoutUser: handleLogout }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}
