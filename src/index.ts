import "@patternfly/react-core/dist/styles/base.css";
// import "@patternfly/patternfly/patternfly.css";
// edit file
import "./css/app.css";


import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "./Components/webcomponents/AppLayoutPage";

@customElement("main-app")
export class MainApp extends LitElement {
  static styles = css`
    /* Your component's styles here */
    :host {
      display: block;
    }
  `;

  render() {
    return html` <app-layout></app-layout>`;
  }
}

