import { createContext, useState } from 'react';
import { checkLogin } from '../apiCalls/checkLogin';

interface UserDataProps {
  isLogged: () => Promise<boolean>;
  userLogged: string;
  setUserLogged: (userName: string) => void;
}

const UserDataContext = createContext({} as UserDataProps);

function UserDataProvider(props: { children: React.ReactNode }) {
  const [userLogged, setUserLogged] = useState('');

  async function isLogged() {
    if (userLogged) return true;

    const result = await checkLogin();
    if (result.success) setUserLogged(result.data.payload);

    return result.success as boolean;
  }

  return (
    <UserDataContext.Provider
      value={
        {
          isLogged,
          userLogged,
          setUserLogged,
        } as UserDataProps
      }
    >
      {props.children}
    </UserDataContext.Provider>
  );
}

export { UserDataProvider, UserDataContext };
export type { UserDataProps };
