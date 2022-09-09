import { ReactNode, useContext, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { logout } from '../../apiCalls/logout';
import { UserDataContext } from '../../providers/UserDataProvider';

interface PropsType {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children }: PropsType) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'text-purple-900' : ''}>
      <Link to={to} className="flex flex-row">
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const userInfo = useContext(UserDataContext);

  async function executeLogout() {
    await logout();
    userInfo.setUserLogged('');
  }

  return (
    <nav className="fixed z-50 mr-12 flex flex-col justify-between py-12 px-3 bg-[#16162D] h-full text-white">
      <div>
        <Link to="/" className="flex flex-col items-center mb-12">
          <div className="w-[60px] h-16 bg-auction bg-contain border-none" />
          <p className="not-italic font-bold text-xl leading-7"> Auction</p>
        </Link>
        <div className="not-italic font-bold text-sm leading-5">
          <p>Plataforma</p>
          <ul>
            <CustomLink to="/dashboard">
              <div className="w-4 h-4 mr-1 bg-dashboard bg-contain border-none bg-center bg-no-repeat" />
              <p>Dashboard</p>
            </CustomLink>
            <CustomLink to="/wallet">
              <div className="w-4 h-4 mr-1 bg-wallet bg-contain border-none" />
              <p>Wallet</p>
            </CustomLink>
          </ul>
        </div>
      </div>

      <Link
        onClick={executeLogout}
        to="/home"
        className="flex flex-row items-center mb-12"
      >
        <div className="w-6 h-6 mr-1 bg-logout bg-contain border-none" />
        <p className="not-italic font-bold text-lg leading-5">Sair</p>
      </Link>
    </nav>
  );
}
