import { ReactNode, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import * as JWT from '../libs/jwt';
import { api } from '../libs/api';
import { UserContext } from '../contexts/UserContext';

interface UserProviderTypes {
  children: ReactNode;
}

interface UserTypes {
  id: number;
  email: string;
  name: string;
}

interface SignInTypes {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
  message: string;
}

/**
 * Archive: src/providers/userProvider.tsx
 *
 * Description: User provider
 *
 * Data: 2022/08/15
 *
 * Author: Peter
 *
 * Collaborators:
 */

export const UserProvider = ({ children }: UserProviderTypes) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserTypes | null>({
    id: 0,
    name: 'User',
    email: 'user@user.com.br',
  });
  const [loading, setLoading] = useState(true);

  function login(userData: UserTypes) {
    const userInfo = {
      id: userData.id,
      email: userData.email,
      name: userData.name,
    };

    setUser(userInfo);
    return true;
  }

  function logout() {
    api.post('logout');

    api.defaults.headers.common.Authorization = '';
    setUser(null);
    navigate('/');
  }

  async function signIn({ email, password }: SignInTypes) {
    setLoading(true);

    try {
      const response = await api.get<SignInResponse>('/login', {
        headers: {
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      localStorage.setItem('auth-token', response.data.token);

      const { userData } = JWT.decode(response.data.token) as {
        userData: UserTypes;
      };

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      login(userData);
    } catch (error: any) {
      enqueueSnackbar(error.response.data.message, {
        variant: 'error',
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    const storagedToken = localStorage.getItem('auth-token');
    if (storagedToken) {
      if (JWT.verifyExpTime(storagedToken)) {
        const { userData } = JWT.decode(storagedToken) as {
          userData: UserTypes;
        };
        login(userData);
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
      } else logout();
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        signIn,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
