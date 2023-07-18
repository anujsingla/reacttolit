import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators/custom-element.js'

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = css`
    /* Your component's styles here */
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <p>
        We are creating an example project to help understand how to migrate a
        React project to a Lit project.
      </p>`;
  }
}
