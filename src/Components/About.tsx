// @ts-nocheck
import "./webcomponents/AboutPage";
import { AboutPageComponent } from "./webcomponents/AboutPageComponent";
// import { AboutPageComponent } from "./webcomponents/AboutPage";

export function About() {
  return (
    <p>
      We are creating an example project to help understand how to migrate a
      React project to a Lit project.
      <AboutPageComponent />
    </p>
  );
}
