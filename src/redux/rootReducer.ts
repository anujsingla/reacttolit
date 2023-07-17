import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  productCart: cartReducer,
});

export default rootReducer;
