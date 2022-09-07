import { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
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
  const [confirmPassword, setConfirmPassword] = useState('');

  const [changeVision, setChangeVision] = useState(true);

  // const userContext = useUser();

  const handleSubmitLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // requisição para fazer login
    console.log('submit', email, password);
  };

  const handleSubmitRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // requisição para fazer registro no sistema
    console.log('submit', email, password);
  };
  return (
    <> {changeVision? (
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
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
      </div>

      <button className=" w-72 h-10 bg-purple-800 rounded text-white">
        Entrar
      </button>
      <button onClick={() => setChangeVision(false)} className=" w-72 h-10 text-white bg-transparent">
        Criar Conta
      </button>
    </form>
    )
      :(
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
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="w-72 h-10 mb-7"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="w-72 h-10 mb-7"
          type="email"
          placeholder="Confirme seu email"
          value={confirmEmail}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
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
          className="w-72 h-10 mb-7"
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>

      <button className=" w-72 h-10 bg-purple-800 rounded text-white">
        Criar Conta
      </button>
      <button onClick={() => setChangeVision(true)} className="w-72 h-10 text-white bg-transparent">
        Entrar
      </button>
    </form>
      )}
    </>
    
    
  );
};
