import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

@customElement("toast-notification")
export class ToastNotificationPage extends LitElement {
  static styles = css`
    .toast {
      position: fixed;
      top: 10%;
      right: 0;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      display: block;
    }
  `;

  @property({ reflect: true, type: Number }) toastDuration = 3000;
  @property({ reflect: true }) toastMessage = "toast message";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="toast">${this.toastMessage}</div>`;
  }
}
