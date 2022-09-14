import { ReactElement, useContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Wallet } from '../pages/Wallet';
import { DashBoard } from '../pages/DashBoard';
import { Auction } from '../pages/Auction';
import { Profile } from '../pages/Profile';
import { UserDataContext } from '../providers/UserDataProvider';
import { LoginPage } from '../pages/Home/LoginPage';
import { RegisterPage } from '../pages/Home/RegisterPage';
import { MainBackground } from '../components/MainBackground';
import { Home } from '../pages/Home';

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const userInfo = useContext(UserDataContext);
  /* const [isLogged, setIsLogged] = useState<boolean>(false);

  async function checkIfUserIsLogged() {
    const result = await userInfo.isLogged();
    setIsLogged(result);
  }

  checkIfUserIsLogged();

  return isLogged === false ? <Navigate to="/home" /> : children; */
  if (!userInfo.userLogged) {
    return <Navigate to="/home" />;
  }

  return children;
};

const Public = ({ children }: ChildrenTypes) => {
  const userInfo = useContext(UserDataContext);
  /* const [isLogged, setIsLogged] = useState<boolean>(false);

  async function checkIfUserIsLogged() {
    const result = await userInfo.isLogged();
    setIsLogged(result);
  } */

  // checkIfUserIsLogged();

  // return isLogged === true ? <Navigate to="/dashboard" /> : children;

  if (userInfo.userLogged) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route
      path="/home"
      element={
        <Public>
          <Home />
        </Public>
      }
    />
    <Route
      path="/dashboard"
      element={
        <Private>
          <DashBoard />
        </Private>
      }
    />
    <Route
      path="/auction/:id"
      element={
        <Private>
          <Auction />
        </Private>
      }
    />
    <Route
      path="/wallet"
      element={
        <Private>
          <Wallet />
        </Private>
      }
    />
    <Route
      path="/profile"
      element={
        <Private>
          <Profile />
        </Private>
      }
    />
  </Routes>
);
