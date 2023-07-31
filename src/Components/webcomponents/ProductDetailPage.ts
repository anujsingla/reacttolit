import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { fetchProductById, fetchProducts } from "../../redux/productsReducer";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import base from "@patternfly/react-core/dist/styles/base.css";
import patternfly from "@patternfly/patternfly/patternfly.css";
import { addCartItem } from "../../redux/cartReducer";
// import { Card } from "@patternfly/elements/react/pf-card/pf-card.js";
// import { Button } from "@patternfly/elements/react/pf-button/pf-button.js";

@customElement("product-detail")
export class ProductDetailPage extends LitElement {
  static styles = [base, patternfly];

  private sc = new SelectorController(this, store, (state) => state);
  private productId = 1;

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(fetchProductById("1"));
  }

  async onAddToCartButton(event) {
    console.log(event);
    const { data: productsByIds } = this.sc?.selected?.products?.productByIds;
    const productDetail = productsByIds?.[this.productId];
    const item = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      quantity: 1,
    };
    await store.dispatch(addCartItem(item));
  }

  render() {
    const { data: productsByIds } = this.sc?.selected?.products?.productByIds;
    const productDetail = productsByIds?.[this.productId];

    return html`<pf-card id="productlist" rounded>
      <img
        slot="header"
        src=${productDetail?.image}
        alt=${productDetail?.title}
        height="100px"
        width="100px"
      />
      <p>
        <a href=${`/products/${productDetail?.id}`}>${productDetail?.title}</a>
      </p>
      <div slot="footer">₹${productDetail?.price}</div>
      <pf-button @click="${this.onAddToCartButton}">Add to cart</pf-button>
    </pf-card>`;
  }
}
