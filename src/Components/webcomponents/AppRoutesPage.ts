import { Routes } from "@lit-labs/router";
import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';


@customElement("app-routes")
export class AppRoutesPage extends LitElement {

  private router = new Routes(this, [
    {path: '/*', render: () => html`<h1>Home</h1>`},
    {path: '/projects', render: () => html`<h1>Projects</h1>`},
    {path: '/about1', render: () => {
      console.log('about route');
      return html`<h1>About</h1>`
    }},
  ]);

  connectedCallback() {
    super.connectedCallback();
    const pathname = window.location.pathname;
    console.log('pathname', pathname)
    this.addEventListener('lit-route-changed', this.onRouteChange);
  }

  onRouteChange(event) {
      window.scroll({
        top: 0,
        left: 0,
      });
  }

  render() {
    return html`
      <header>header2</header>
      <main>${this.router.outlet()}</main>
      <footer>footer1</footer>
    `;
  }
}
