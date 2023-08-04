import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { fetchProductById, fetchProducts } from "../../redux/productsReducer";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import base from "@patternfly/react-core/dist/styles/base.css";
import patternfly from "@patternfly/patternfly/patternfly.css";
import { addCartItem } from "../../redux/cartReducer";

@customElement("product-detail")
export class ProductDetailPage extends LitElement {
  static styles = [base, patternfly];

  private sc = new SelectorController(this, store, (state) => state);
  private productId = '';

  connectedCallback() {
    this.getProductIdFromUrl();
    super.connectedCallback();
    store.dispatch(fetchProductById(this.productId));
  }

  getProductIdFromUrl() {
    const url = window.location.href;
    const urlObj = new URL(url);
    const pathnameSegments = urlObj.pathname.split('/');
    const productId = pathnameSegments[pathnameSegments.length - 1];
    console.log('productId', productId);
    this.productId = productId;
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
