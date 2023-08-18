import { html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import { BasePage } from "./BasePage";
import "./AppRoutesPage";

@customElement("app-layout")
export class AppLayoutPage extends BasePage {
  static styles = [...BasePage.styles];

  private sc = new SelectorController(this, store, (state) => state);

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const { productCart } = this.sc?.selected?.productCart;
    return html`<div
      class="pf-c-page pf-m-resize-observer pf-m-breakpoint-2xl pf-m-height-breakpoint-2xl"
    >
      <header class="pf-c-page__header react-to-lit-header">
        <div class="pf-c-page__header-brand">
          <a class="pf-c-page__header-brand-link" href="/">React to lit</a>
        </div>
        <div class="pf-c-page__header-nav">
          <nav
            class="pf-c-nav pf-m-horizontal home-tabs"
            aria-label="Nav"
            data-ouia-component-type="PF4/Nav"
            data-ouia-safe="true"
            data-ouia-component-id="OUIA-Generated-Nav-horizontal-2"
            id="nav-primary-simple"
          >
            <ul class="pf-c-nav__list" id="nav-list-simple">
              <li
                class="pf-c-nav__item"
                data-ouia-component-type="PF4/NavItem"
                data-ouia-safe="true"
                data-ouia-component-id="OUIA-Generated-NavItem-2"
              >
                <a class="pf-c-nav__link active" href="/">Products</a>
              </li>
              <li
                class="pf-c-nav__item"
                data-ouia-component-type="PF4/NavItem"
                data-ouia-safe="true"
                data-ouia-component-id="OUIA-Generated-NavItem-4"
              >
                <a class="pf-c-nav__link" href="/feedback">Feedback</a>
              </li>
              <li
                class="pf-c-nav__item"
                data-ouia-component-type="PF4/NavItem"
                data-ouia-safe="true"
                data-ouia-component-id="OUIA-Generated-NavItem-6"
              >
                <a class="pf-c-nav__link" href="/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="pf-c-page__header-tools">
          <a
            aria-disabled="false"
            class="pf-c-button pf-m-link"
            data-ouia-component-type="PF4/Button"
            data-ouia-safe="true"
            data-ouia-component-id="OUIA-Generated-Button-link-2"
            href="/cart"
            >Cart<span class="pf-c-button__count custom-badge-unread"
              ><span class="pf-c-badge pf-m-unread"
                >${productCart?.length || 0}</span
              ></span
            ></a
          >
        </div>
      </header>
      <main id="main-content-page-layout" class="pf-c-page__main" tabindex="-1">
        <section class="pf-c-page__main-section pf-m-light">
          <!-- add content here -->
          <app-routes></app-routes>
        </section>
      </main>
    </div>`;
  }
}
