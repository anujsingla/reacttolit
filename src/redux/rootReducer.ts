import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
