import { html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { fetchProducts } from "../../redux/productsReducer";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import { map } from "lodash";
import { BasePage } from "./BasePage";

@customElement("product-list")
export class ProductsListPage extends BasePage {
  static styles = [...BasePage.styles];

  private sc = new SelectorController(this, store, (state) => state);

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
