import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { AboutPage } from "./webcomponents/AboutPage";

export const About = createComponent({
  tagName: "about-page",
  elementClass: AboutPage,
  react: React,
  events: {},
});
