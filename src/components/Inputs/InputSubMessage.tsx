import { useState } from 'react';

interface ReferenceInputSubMessageType {
  setNormalSubMessage: (message: string) => void;
  setErrorSubMessage: (message: string) => void;
}

interface PropTypes {
  className?: string;
  initialSubMessage?: string;
  reference: React.MutableRefObject<ReferenceInputSubMessageType>;
}

function InputSubMessage(props: PropTypes) {
  const [subMessage, setSubMessage] = useState(props.initialSubMessage);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  function setNormalSubMessage(message: string) {
    setIsErrorMessage(false);
    setSubMessage(message);
  }

  function setErrorSubMessage(message: string) {
    setIsErrorMessage(true);
    setSubMessage(message);
  }

  // eslint-disable-next-line no-param-reassign
  props.reference.current = { setNormalSubMessage, setErrorSubMessage };

  return (
    <p
      className={`${
        isErrorMessage
          ? 'text-red-700 font-medium dark:text-red-400'
          : 'text-white font-normal'
      } text-xs ${props.className ? props.className : ''}`}
    >
      {subMessage}
    </p>
  );
}

export { InputSubMessage };
export type { ReferenceInputSubMessageType };
