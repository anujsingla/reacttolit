import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { AboutPage } from "./AboutPage";

export const AboutPageComponent = createComponent({
  tagName: "about-page",
  elementClass: AboutPage,
  react: React,
  events: {},
});
