import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './UserProvider';

interface AppProviderProps {
  children: ReactNode;
}

/**
 * Archive: src/providers/index.tsx
 *
 * Description: Main provider
 *
 * Data: 2022/08/15
 *
 * Author: Rey
 *
 * Collaborators:
 */

export const AppProvider = ({ children }: AppProviderProps) => (
  <BrowserRouter>
    <UserProvider>{children}</UserProvider>
  </BrowserRouter>
);
