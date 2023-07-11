import { useEffect } from "react";
import { fetchProducts } from "../redux/productsReducer";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook";

export function Page1() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.products.products);

  console.log("product", data);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Page 1</h1>;
}
