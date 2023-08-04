import { LitElement } from "lit";
import { customElement } from "lit/decorators/custom-element.js";;
import base from "@patternfly/react-core/dist/styles/base.css";
import patternfly from "@patternfly/patternfly/patternfly.css";

@customElement("base-page")
export class BasePage extends LitElement {
  static styles = [base, patternfly];
}
