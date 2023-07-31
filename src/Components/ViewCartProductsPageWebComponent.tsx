import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { ViewCartProductsPage } from "./webcomponents/ViewCartProductsPage";

export const ViewCartProductsPageWebComponent = createComponent({
  tagName: "view-cart-products",
  elementClass: ViewCartProductsPage,
  react: React,
  events: {},
});
