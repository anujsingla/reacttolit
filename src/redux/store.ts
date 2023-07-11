import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const middleware: any = [];

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger({
    level: "info",
    collapsed: true,
  });
  middleware.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});

export type IStateReduced = ReturnType<typeof store.getState>;
// The type definition for the redux dispatch that extends the dispatch type to accept thunk actions.
export type IAppDispatch = typeof store.dispatch &
  ThunkDispatch<IStateReduced, unknown, AnyAction>;

/**
 * The type definition for a redux thunk action which is a function that returns a function that can be called by the redux dispatch function.
 */
export type IThunkAction<
  R, // Return type of the thunk function
  S // state type used by getState
> = (dispatch: IAppDispatch, getState: () => S) => R;
