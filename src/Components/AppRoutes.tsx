import { Routes, Route, Navigate } from "react-router-dom";
import { Feedback } from "./Feedback";
import { About } from "./About";
// import { ProductDetail } from "./ProductDetail";
import { NotFound } from "./NotFound";
// import { ViewCartProducts } from "./ViewCartProducts";
import { ProductList } from "./ProductList";
import { ProductDetailWebComponent } from "./ProductDetailWebComponent";
import { ViewCartProductsPageWebComponent } from "./ViewCartProductsPageWebComponent";
// import { Products } from "./Products";

export const mainContentId = "main-content-page-layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<ProductList />} />
      {/* <Route path="/products1" element={<Products />} /> */}
      <Route
        path="/products/:productId"
        element={<ProductDetailWebComponent />}
      />
      {/* <Route
        path="/products1/:productId"
        element={<ProductDetailWebComponent />}
      /> */}
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/cart1" element={<ViewCartProducts />} /> */}
      <Route path="/cart" element={<ViewCartProductsPageWebComponent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
