import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

@customElement("toast-notification")
export class ToastNotificationPage extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 15%;
      right: 0;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      display: none;
      z-index: 2000;
    }

    :host(.show) {
        display: block;
    }
  `;

  @property({ reflect: true }) toastMessage = "toast message";

  connectedCallback() {
    super.connectedCallback();
  }

  show(text = '', duration = 3000) {
    return new Promise((resolve, reject) => {
      if (this.className === 'show') {
        // Do nothing, prevent spamming
      } else {
        this.toastMessage = text;
        this.className = 'show';
        setTimeout(
          () => {
            this.toastMessage = '';
            this.className = this.className.replace('show', '');
            resolve(null);
          },
          duration >= 1000 ? duration : 3000
        );
      }
    });
  }

  render() {
    return html`<div class="toast">${this.toastMessage}</div>`;
  }
}