import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../models/apiUtils";

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface ICartState {
  productCart: ICartItem[];
  totalPrice: number;
}

export const defaultState: ICartState = {
  productCart: [],
  totalPrice: 0,
};

export const productCartReducer = createSlice({
  name: "productCart",
  initialState: defaultState,
  reducers: {
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      const { id, title, price, quantity } = action.payload;
      const existingItem = state.productCart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.productCart.push({ id, title, price, quantity: quantity });
      }

      state.totalPrice += price * quantity;
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemToRemove = state.productCart.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.productCart = state.productCart.filter(
          (item) => item.id !== itemId
        );
      }
    },
  },
});

export const { addCartItem, removeCartItem } = productCartReducer.actions;

export default productCartReducer.reducer;
