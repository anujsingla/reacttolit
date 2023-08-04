import { html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { fetchProducts } from "../../redux/productsReducer";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import { find, map } from "lodash";
import { BasePage } from "./BasePage";

@customElement("view-cart-products")
export class ViewCartProductsPage extends BasePage {
  static styles = [...BasePage.styles];

  private sc = new SelectorController(this, store, (state) => state);

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(fetchProducts());
  }

  render() {
    const { productCart, totalPrice } = this.sc?.selected?.productCart;
    const { data: products } = this.sc?.selected?.products?.products;

    if (productCart?.length === 0) {
      return html`<div>No Cart Items</div>`;
    }

    return html`<main
      id="main-content-page-layout"
      class="pf-c-page__main"
      tabindex="-1"
    >
      <section class="pf-c-page__main-section pf-m-light">
        <ul class="pf-c-list pf-m-bordered pf-m-plain">
          ${map(productCart, (c) => {
            const productDetail = find(products, (p) => p.id === c.id);
            console.log("productDetail", productDetail);
            return html`<li class="">
              <div class="pf-l-grid pf-m-all-2-col-on-md">
                <div class="pf-l-grid__item">
                  <img
                    src=${productDetail?.image}
                    alt=${"Carlie Anglemire"}
                    height="120"
                    width="180"
                  />
                </div>
                <div class="pf-l-grid__item">
                  <div class="pf-l-flex pf-m-column">
                    <div class="">${productDetail?.title}</div>
                    <div class="">₹${productDetail?.price}</div>
                    <div class="">Quantity: ${c.quantity}</div>
                  </div>
                </div>
              </div>
            </li>`;
          })}
          <li class="text-align-right">Total Price: <b>${totalPrice}</b></li>
        </ul>
      </section>
    </main>`;
  }
}
