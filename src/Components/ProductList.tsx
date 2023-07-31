import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { ProductsListPage } from "./webcomponents/ProductsListPage";

export const ProductList = createComponent({
  tagName: "product-list",
  elementClass: ProductsListPage,
  react: React,
  events: {},
});
