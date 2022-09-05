import { createContext, useContext } from 'react';

interface ContextTypes {
  user: UserTypes | null;
  logout?: () => void;
  signIn?: ({ email, password }: SignInTypes) => Promise<void>;
  loading: boolean;
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

/**
 * Archive: src/contexts/userContext.tsx
 *
 * Description: User provider
 *
 * Data: 2022/08/15
 *
 * Author: Rey
 *
 * Collaborators:
 */
export const UserContext = createContext<ContextTypes>({
  user: {
    id: 0,
    name: 'User',
    email: 'user@user.com.br',
  },
  loading: false,
});

export const useUser = () => useContext(UserContext);
