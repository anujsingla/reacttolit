import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { IAppDispatch, IStateReduced } from "./store";

export const useAppSelector: TypedUseSelectorHook<IStateReduced> = useSelector;

/**
 * @returns the redux dispatch for the root reducer
 */
export const useAppDispatch = (): IAppDispatch => useDispatch<IAppDispatch>();
