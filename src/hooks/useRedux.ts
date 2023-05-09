import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { StoreType, AppDispatch } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
