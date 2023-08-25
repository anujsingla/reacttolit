import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";

@customElement("feedback-page")
export class FeedbackPage extends LitElement {
  static styles = css`
    /* Your component's styles here */
    :host {
      display: block;
    }
  `;

  render() {
    return html` <p>
      This is feedback page.
    </p>`;
  }
}
