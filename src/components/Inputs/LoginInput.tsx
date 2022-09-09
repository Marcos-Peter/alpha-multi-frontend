import { useRef, useState } from 'react';
import {
  InputSubMessage,
  ReferenceInputSubMessageType,
} from './InputSubMessage';
import { Input } from './Input';
import { InputBox } from './InputBox';
import { InputReferenceType } from './InputReferenceType';
import { loginMask } from '../../masks/loginMask';

interface PropTypes {
  className?: string;
  placeholder?: string;
  reference?: React.MutableRefObject<InputReferenceType>;
}

function LoginInput(props: PropTypes) {
  const [value, setValue] = useState('');
  const inputSubMessageRef = useRef({} as ReferenceInputSubMessageType);

  function loginInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(loginMask(event.target.value));
  }

  function isLoginValid() {
    const condition =
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(value);

    if (condition) inputSubMessageRef.current.setNormalSubMessage('');
    else
      inputSubMessageRef.current.setErrorSubMessage(
        'Nome do usuário deve ser de 8 a 20 caracteres utilizando apenas letras, dígitos, underscore ou ponto.',
      );

    return condition;
  }

  if (props?.reference)
    // eslint-disable-next-line no-param-reassign
    props.reference.current = { value, isValid: isLoginValid, setValue };

  return (
    <InputBox className={`${props?.className ? props.className : ''}`}>
      <Input
        type="text"
        initialValue={value}
        maxLength={50}
        placeholder={props.placeholder ? props.placeholder : 'Digite seu Login'}
        InputOnChange={loginInputOnChange}
      />
      <InputSubMessage reference={inputSubMessageRef} />
    </InputBox>
  );
}

export { LoginInput };
