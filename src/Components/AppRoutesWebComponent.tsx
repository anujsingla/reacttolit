import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { AppRoutesPage } from "./webcomponents/AppRoutesPage";

export const AppRoutesWebComponent = createComponent({
  tagName: "app-routes",
  elementClass: AppRoutesPage,
  react: React,
  events: {},
});
