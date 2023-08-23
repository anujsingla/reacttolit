import { html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { fetchProductById } from "../../redux/productsReducer";
import { store } from "../../redux/store";
import { SelectorController } from "./controllers/selector-controller";
import { addCartItem } from "../../redux/cartReducer";
import { BasePage } from "./BasePage";
import { property } from "lit/decorators/property.js";

@customElement("product-detail")
export class ProductDetailPage extends BasePage {
  static styles = [...BasePage.styles];

  @property({ reflect: true }) productId = "";

  private sc = new SelectorController(this, store, (state) => state);

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(fetchProductById(this.productId));
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
