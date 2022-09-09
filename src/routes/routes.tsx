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

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const userInfo = useContext(UserDataContext);
  const [isLogged, setIsLogged] = useState('loading');

  async function checkIfUserIsLogged() {
    const result = await userInfo.isLogged();
    setIsLogged(String(result));
  }

  checkIfUserIsLogged();

  // eslint-disable-next-line no-nested-ternary
  return isLogged === 'false' ? (
    <Navigate to="/home" />
  ) : isLogged === 'true' ? (
    children
  ) : (
    <MainBackground></MainBackground>
  );
};

const Public = ({ children }: ChildrenTypes) => {
  const userInfo = useContext(UserDataContext);

  const [isLogged, setIsLogged] = useState('loading');

  async function checkIfUserIsLogged() {
    const result = await userInfo.isLogged();
    setIsLogged(String(result));
  }

  checkIfUserIsLogged();

  // eslint-disable-next-line no-nested-ternary
  return isLogged === 'true' ? (
    <Navigate to="/dashboard" />
  ) : isLogged === 'false' ? (
    children
  ) : (
    <MainBackground></MainBackground>
  );
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route
      path="/home"
      element={
        <Public>
          <LoginPage />
        </Public>
      }
    />
    <Route
      path="/register"
      element={
        <Public>
          <RegisterPage />
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
