import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { createLogin } from '../../apiCalls/createLogin';
import { Button } from '../../components/Button';
import { FormsBox } from '../../components/FormsBox';
import { InputReferenceType } from '../../components/Inputs/InputReferenceType';
import { LoginInput } from '../../components/Inputs/LoginInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { MainBackground } from '../../components/MainBackground';

function RegisterPage() {
  const navigate = useNavigate();

  const nameInputRef = useRef({} as InputReferenceType);
  const passwordInputRef = useRef({} as InputReferenceType);
  const passwordConfirmationInputRef = useRef({} as InputReferenceType);

  async function executeRegistration() {
    const nameValid = nameInputRef.current.isValid();
    const passwordValid = passwordInputRef.current.isValid();
    const passwordConfirmationValid =
      passwordConfirmationInputRef.current.isValid();

    if (!(nameValid && passwordValid && passwordConfirmationValid)) return;

    if (
      !(
        passwordInputRef.current.value ===
        passwordConfirmationInputRef.current.value
      )
    ) {
      passwordConfirmationInputRef.current.inputSubMessageRef?.current.setErrorSubMessage(
        'As senhas devem ser iguais',
      );

      return;
    }

    const result = await createLogin(
      nameInputRef.current.value,
      passwordInputRef.current.value,
    );

    if (!result.success) {
      passwordConfirmationInputRef.current.inputSubMessageRef?.current.setErrorSubMessage(
        result.message,
      );

      return;
    }

    navigate('/');
  }

  return (
    <MainBackground className="overflow-y-auto">
      <div className="flex justify-center items-center w-full h-full">
        <FormsBox>
          <h2>Sign Up</h2>
          <LoginInput
            className="mb-5"
            reference={nameInputRef}
            placeholder="Login"
          />
          <PasswordInput
            className="mb-5"
            reference={passwordInputRef}
            placeholder="Password"
          />
          <PasswordInput
            placeholder="Confirm Password"
            reference={passwordConfirmationInputRef}
          />
          <Button
            label="Registrar"
            color="#505050"
            category="cadastrar"
            onClick={executeRegistration}
          ></Button>
        </FormsBox>
      </div>
    </MainBackground>
  );
}

export { RegisterPage };
