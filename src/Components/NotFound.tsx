import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { NotFoundPage } from "./webcomponents/NotFoundPage";

export const NotFound = createComponent({
  tagName: "not-found",
  elementClass: NotFoundPage,
  react: React,
  events: {},
});
