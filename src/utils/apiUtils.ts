// https://fakestoreapi.com/docs
import { IApiObject, IProduct } from "../models/apiUtils";

export async function fetchProductData(): Promise<IProduct[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const data = await response.json();
      return data as IProduct[];
    } else {
      throw new Error("Product request failed");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchProductDetails(id: string): Promise<IProduct> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data as IProduct;
    } else {
      throw new Error("Product request failed");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getApiObject<T>(
  data: T = null,
  isFetching = false,
  isUpdating = false,
  isError = false,
  errorMessage = "",
  error: Error = null
): IApiObject<T> {
  return { data, isFetching, isError, errorMessage, error, isUpdating };
}
