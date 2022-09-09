import { ReferenceInputSubMessageType } from './InputSubMessage';

interface InputReferenceType {
  value: string;
  isValid: () => boolean;
  setValue: (value: React.SetStateAction<string>) => void;
  inputSubMessageRef?: React.MutableRefObject<ReferenceInputSubMessageType>;
}

export type { InputReferenceType };
