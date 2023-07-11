import { Dispatch } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApiObject, IProduct } from "../models/apiUtils";
import { fetchProductData, getApiObject } from "../utils/apiUtils";

export interface IProductsState {
  products: IApiObject<IProduct[]>;
}

export const defaultState: IProductsState = {
  products: getApiObject([]),
};

export const productsReducer = createSlice({
  name: "productlist",
  initialState: defaultState,
  reducers: {
    setProductList: (state, action: PayloadAction<IApiObject<IProduct[]>>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductList } = productsReducer.actions;

export const fetchProducts =
  () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(setProductList(getApiObject([], true)));
      const productResponse = await fetchProductData();
      dispatch(setProductList(getApiObject(productResponse)));
    } catch (error: any) {
      dispatch(
        setProductList(
          getApiObject([], false, false, true, error?.message, error as Error)
        )
      );
    }
  };
export default productsReducer.reducer;
