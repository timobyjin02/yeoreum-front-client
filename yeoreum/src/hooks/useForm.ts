import { useState, useCallback } from 'react';
import { Validity } from '../types/signUp';

interface InitialStateType {
  [key: string]: { value: string; validity: Validity; message: string };
}

const useForm = (initialState: InitialStateType) => {
  const [state, setState] = useState<InitialStateType>(initialState);

  const onChangeValue = useCallback((name: string, value: string | File) => {
    setState(pre => ({
      ...pre,
      [name]: {
        ...(pre as any)[name],
        value,
      },
    }));
  }, []);

  const onChangeValidity = useCallback(
    (name: string, isValid: Validity, message: string) => {
      setState(pre => ({
        ...pre,
        [name]: {
          ...(pre as any)[name],
          validity: isValid,
          message,
        },
      }));
    },
    [],
  );
  return [state, setState, onChangeValue, onChangeValidity] as const;
};

export default useForm;
