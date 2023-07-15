import { Dispatch } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApiObject, IProduct } from "../models/apiUtils";
import {
  fetchProductData,
  fetchProductDetails,
  getApiObject,
} from "../utils/apiUtils";
import { IStateReduced } from "./store";
import { clone, filter, isEmpty } from "lodash";

export interface IProductByIds {
  [id: string]: Partial<IProduct>;
}
export interface IProductsState {
  products: IApiObject<IProduct[]>;
  productByIds: IApiObject<IProductByIds>;
}

export const defaultState: IProductsState = {
  products: getApiObject([]),
  productByIds: getApiObject({}),
};

export const productsReducer = createSlice({
  name: "productlist",
  initialState: defaultState,
  reducers: {
    setProductList: (state, action: PayloadAction<IApiObject<IProduct[]>>) => {
      state.products = action.payload;
    },
    setProductsByIds: (
      state,
      action: PayloadAction<IApiObject<IProductByIds>>
    ) => {
      state.productByIds = action.payload;
    },
  },
});

export const { setProductList, setProductsByIds } = productsReducer.actions;

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

export const fetchProductById =
  (id: string) =>
  async (
    dispatch: Dispatch<any>,
    getState: () => IStateReduced
  ): Promise<void> => {
    const existingProductsIds = getState()?.products?.productByIds?.data || {};
    if (!isEmpty(existingProductsIds?.[id])) {
      return;
    }
    dispatch(setProductsByIds(getApiObject(existingProductsIds, true)));
    try {
      const latestProductById = await fetchProductDetails(id);
      const existingValues = clone(existingProductsIds);
      if (!isEmpty(latestProductById)) {
        existingValues[id] = latestProductById;
      }
      dispatch(setProductsByIds(getApiObject(existingValues)));
    } catch (error: any) {
      dispatch(
        setProductsByIds(
          getApiObject(
            existingProductsIds,
            false,
            false,
            true,
            error?.message,
            error
          )
        )
      );
    }
  };
export default productsReducer.reducer;
