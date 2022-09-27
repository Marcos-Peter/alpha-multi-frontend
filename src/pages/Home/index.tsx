import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticateLogin } from '../../apiCalls/authenticateLogin';
import { createLogin } from '../../apiCalls/createLogin';
import { UserDataContext } from '../../providers/UserDataProvider';
/**
 * Archive: src/pages/Home/index.tsx
 *
 * Description: Home Page
 *
 * Data: 2022/08/19
 *
 * Author: Bruno Barbosa
 */
export const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [changeVision, setChangeVision] = useState(true);

  const navigate = useNavigate();

  const userInfo = useContext(UserDataContext);

  const handleSubmitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setInputErrorMessage('');

    // requisição para fazer login
    if (!(name && password)) {
      setInputErrorMessage('Favor preencher os inputs');
      return;
    }

    const result = await authenticateLogin(name, password);

    if (!result.success) {
      setInputErrorMessage(result.message);
      return;
    }

    userInfo.setUserLogged(result.data.username);

    navigate('/dashboard');
  };

  const handleSubmitRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setInputErrorMessage('');

    // requisição para fazer registro no sistema
    if (!(name && password && confirmPassword)) {
      setInputErrorMessage('Favor preencher os inputs');
      return;
    }

    if (!(password === confirmPassword)) {
      setInputErrorMessage('As senhas devem ser iguais');
      return;
    }

    const result = await createLogin(name, password);

    if (!result.success) {
      setInputErrorMessage(result.message);
      return;
    }

    navigate('/');
  };

  return (
    <>
      {' '}
      {changeVision ? (
        <form
          className="flex flex-col justify-center items-center bg-[#1F1F35] p-14 rounded-lg"
          onSubmit={handleSubmitLogin}
        >
          <p className="h-10 not-italic font-normal text-4xl text-white mb-10">
            Sistema de Leilão
          </p>
          <div className="box-border flex flex-col rounded">
            <input
              className="w-72 h-10 mb-7"
              type="text"
              placeholder="Digite seu username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="w-72 h-10 mb-1"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="w-72 text-red-700 mb-5 text-center">
              {inputErrorMessage}
            </p>
          </div>

          <button className="w-72 h-10 bg-purple-800 rounded text-white">
            Entrar
          </button>
          <button
            onClick={() => setChangeVision(false)}
            className="w-72 h-10 text-white bg-transparent"
          >
            Criar Conta
          </button>
        </form>
      ) : (
        <form
          className="flex flex-col justify-center items-center bg-[#1F1F35] p-14 rounded-lg"
          onSubmit={handleSubmitRegister}
        >
          <p className="h-10 not-italic font-normal text-4xl text-white mb-10">
            Registro
          </p>
          <div className="box-border flex flex-col rounded">
            <input
              className="w-72 h-10 mb-7"
              type="text"
              placeholder="Digite seu username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="w-72 h-10 mb-7"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="w-72 h-10 mb-1"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <p className="w-72 text-red-700 mb-5 text-center">
              {inputErrorMessage}
            </p>
          </div>

          <button className=" w-72 h-10 bg-purple-800 rounded text-white">
            Criar Conta
          </button>
          <button
            onClick={() => setChangeVision(true)}
            className="w-72 h-10 text-white bg-transparent"
          >
            Entrar
          </button>
        </form>
      )}
    </>
  );
};
