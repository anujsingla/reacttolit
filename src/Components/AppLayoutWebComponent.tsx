import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { AppLayoutPage } from "./webcomponents/AppLayoutPage";

export const AppLayoutWebComponent = createComponent({
  tagName: "app-layout",
  elementClass: AppLayoutPage,
  react: React,
  events: {},
});
