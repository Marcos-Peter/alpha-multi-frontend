import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticateLogin } from '../../apiCalls/authenticateLogin';
import { Button } from '../../components/Button';
import { FormsBox } from '../../components/FormsBox';
import { InputReferenceType } from '../../components/Inputs/InputReferenceType';
import { LoginInput } from '../../components/Inputs/LoginInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { MainBackground } from '../../components/MainBackground';
import { UserDataContext } from '../../providers/UserDataProvider';

function LoginPage() {
  const navigate = useNavigate();

  const userInfo = useContext(UserDataContext);

  const nameInputRef = useRef({} as InputReferenceType);
  const passwordInputRef = useRef({} as InputReferenceType);

  async function executeLogin() {
    const nameValid = nameInputRef.current.isValid();
    const passwordValid = passwordInputRef.current.isValid();

    if (!(nameValid && passwordValid)) return;

    const result = await authenticateLogin(
      nameInputRef.current.value,
      passwordInputRef.current.value,
    );

    if (!result.success) {
      passwordInputRef.current.inputSubMessageRef?.current.setErrorSubMessage(
        result.message,
      );

      return;
    }

    userInfo.setUserLogged(result.data.userName);

    navigate('/dashboard');
  }

  return (
    <MainBackground className="overflow-y-auto">
      <div className="flex justify-center items-center w-full h-full">
        <FormsBox>
          <h2>Login</h2>
          <LoginInput
            className="mb-5"
            reference={nameInputRef}
            placeholder="Login"
          />
          <PasswordInput reference={passwordInputRef} placeholder="Password" />
          <Button
            label="Entrar"
            category="primary"
            color="#505050"
            onClick={executeLogin}
          />
        </FormsBox>
      </div>
    </MainBackground>
  );
}

export { LoginPage };
