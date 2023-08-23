import { Router } from "@lit-labs/router";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./ProductsListPage";
import "./AboutPage";
import "./ProductDetailPage";
import "./ViewCartProductsPage";
import "./NotFoundPage";

@customElement("app-routes")
export class AppRoutesPage extends LitElement {
  private router = new Router(this, [
    { path: "/", render: () => html`<product-list></product-list>` },
    { path: "/products", render: () => html`<product-list></product-list>` },
    {
      path: "/products/:productId",
      render: ({ productId }) => {
        return html`<product-detail productId="${productId}"></product-detail>`;
      },
    },
    {
      path: "/about",
      render: () => {
        return html`<about-page></about-page>`;
      },
    },
    {
      path: "/cart",
      render: () => {
        return html`<view-cart-products></view-cart-products>`;
      },
    },
    { path: "/*", render: () => html`<not-found></not-found>` },
  ]);

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <main>${this.router.outlet()}</main> `;
  }
}
