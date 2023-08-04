import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";

@customElement("not-found")
export class NotFoundPage extends LitElement {
  static styles = css`
    /* Your component's styles here */
    :host {
      display: block;
    }
  `;

  render() {
    return html` <section className="pf-c-page__main-section pf-m-light">
      <Panel>
        <h3 slot="header">404! This view hasn't been created yet.</h3>
        <p>Go to page <a href="/products">home</a> page</p>
      </Panel>
    </section>`;
  }
}
