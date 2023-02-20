import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useLoginState = () => {
  const { isLoggedIn, userData, error } = useAppSelector(state => state.login);

  return { isLoggedIn, userData, error };
};
