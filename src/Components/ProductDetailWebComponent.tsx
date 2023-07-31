import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { ProductDetailPage } from "./webcomponents/ProductDetailPage";

export const ProductDetailWebComponent = createComponent({
  tagName: "product-detail",
  elementClass: ProductDetailPage,
  react: React,
  events: {},
});
