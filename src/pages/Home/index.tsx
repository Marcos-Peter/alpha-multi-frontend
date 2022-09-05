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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const userContext = useUser();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('submit', email, password);
  };
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <p className="h-10 not-italic font-normal text-4xl text-green-900 mb-10">
        Sistema de Votação
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

      <button className=" w-72 h-10 bg-teal-800 rounded text-white">
        Entrar
      </button>
    </form>
  );
};
