import { InputSubMessage, ReferenceInputSubMessageType } from './InputSubMessage';
import { useRef, useState } from 'react';
import { Input } from './Input';
import { InputBox } from './InputBox';
import { InputReferenceType } from './InputReferenceType';

interface PropTypes
{
    className?: string;
    placeholder?: string;
    reference?: React.MutableRefObject<InputReferenceType>;
}

function PasswordInput (props: PropTypes)
{
    const maxPasswordLength = 10;

    const [ value, setValue ] = useState('');
    const inputSubMessageRef = useRef({} as ReferenceInputSubMessageType);

    function passwordInputOnChange (event: React.ChangeEvent<HTMLInputElement>)
    {
        setValue(event.target.value);
    }

    function isPasswordValid ()
    {
        const condition = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%¨&*?])[A-Za-z\d!@#$%¨&*?]{8,10}$/).test(value);

        if (condition) inputSubMessageRef.current.setNormalSubMessage('');
        else inputSubMessageRef.current.setErrorSubMessage('Senha deve possuir de 8 a 10 caracteres, começando por letra maiúscula, conter pelo menos um número e um caracter especial.');

        return condition;
    }

    if (props?.reference) props.reference.current = { value, isValid: isPasswordValid, setValue, inputSubMessageRef };

    return (
        <InputBox className={`${props?.className ? props.className : ''}`}>
            <Input type="password" initialValue={value} maxLength={maxPasswordLength} placeholder={props.placeholder ? props.placeholder : 'Digite sua Senha'} InputOnChange={passwordInputOnChange} />
            <InputSubMessage reference={inputSubMessageRef} />
        </InputBox>
    );
}

export { PasswordInput };
