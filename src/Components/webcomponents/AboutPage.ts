import { LitElement, html, css } from "lit";

export class AboutPage extends LitElement {
  static styles = css`
    /* Your component's styles here */
    :host {
      display: block;
    }
  `;

  render() {
    return html` <p>Hello from LitElement component!</p> `;
  }
}

customElements.define("about-page", AboutPage);
