import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { fetchProducts } from "../../redux/productsReducer";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import { map } from "lodash";
import base from "@patternfly/react-core/dist/styles/base.css";
import patternfly from "@patternfly/patternfly/patternfly.css";
import { ReactRouterController } from "./controllers/react-router-controller";
// import { Card } from "@patternfly/elements/react/pf-card/pf-card.js";
// import { Button } from "@patternfly/elements/react/pf-button/pf-button.js";

@customElement("product-list")
export class ProductsListPage extends LitElement {
  static styles = [base, patternfly];

  private sc = new SelectorController(this, store, (state) => state);

  rc = new ReactRouterController(this);

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(fetchProducts());
  }

  render() {
    const { data: products } = this.sc?.selected?.products?.products;
    console.log("products", products);

    return html` <section className="pf-c-page__main-section pf-m-light">
      <section class="pf-c-page__main-section pf-m-fill">
        <div class="pf-l-gallery pf-m-gutter">
          ${map(
            products,
            (p) => html`<pf-card id="productlist" rounded size="compact">
              <img
                slot="header"
                src=${p.image}
                alt=${p.title}
                height="100px"
                width="100px"
              />
              <p><a href=${`/products/${p.id}`}>${p.title}</a></p>
              <div slot="footer">₹${p.price}</div>
            </pf-card>`
          )}
        </div>
      </section>
    </section>`;
  }
}
